#!/usr/bin/env bash
set -euo pipefail

PROJECT_KEY="{{PROJECT_KEY}}"
SCANNER="{{SCANNER}}"
SONAR_PORT="${SONAR_PORT:-9000}"
HOST_URL="http://localhost:${SONAR_PORT}"
ADMIN_PASSWORD="${SONAR_ADMIN_PASSWORD:-$PROJECT_KEY}"
TOKEN_FILE=".sonar-token"

cd "$(dirname "$0")/.."

up() {
  docker start sonarqube >/dev/null 2>&1 ||
    docker run -d --name sonarqube -p "${SONAR_PORT}:9000" sonarqube:lts
}

wait_until_up() {
  until curl -fsS "${HOST_URL}/api/system/status" 2>/dev/null | grep -q '"status":"UP"'; do
    sleep 5
  done
}

setup() {
  wait_until_up
  if [ -s "$TOKEN_FILE" ]; then
    echo "sonar: $TOKEN_FILE already exists"
    return
  fi
  curl -fsS -u admin:admin -X POST \
    "${HOST_URL}/api/users/change_password?login=admin&previousPassword=admin&password=${ADMIN_PASSWORD}" ||
    echo "sonar: admin password already changed"
  curl -fsS -u "admin:${ADMIN_PASSWORD}" -X POST \
    "${HOST_URL}/api/user_tokens/generate?name=local-token-$(date +%s)" |
    jq -r .token >"$TOKEN_FILE"
}

scan_cli() {
  docker run --rm \
    --add-host=host.docker.internal:host-gateway \
    -e SONAR_HOST_URL="http://host.docker.internal:${SONAR_PORT}" \
    -v "$PWD:/usr/src" \
    sonarsource/sonar-scanner-cli \
    -Dsonar.projectKey="$PROJECT_KEY" \
    -Dsonar.login="$(cat "$TOKEN_FILE")"
}

scan_dotnet() {
  dotnet tool update --global dotnet-sonarscanner >/dev/null ||
    dotnet tool install --global dotnet-sonarscanner
  dotnet sonarscanner begin \
    /k:"$PROJECT_KEY" \
    /d:sonar.host.url="$HOST_URL" \
    /d:sonar.login="$(cat "$TOKEN_FILE")" \
    /d:sonar.exclusions="**/bin/**,**/obj/**,**/node_modules/**,**/.agents/**,**/.cursor/**,**/wiki/**,**/bruno/**"
  dotnet build
  dotnet sonarscanner end /d:sonar.login="$(cat "$TOKEN_FILE")"
}

scan() {
  if [ "$SCANNER" = "dotnet" ]; then scan_dotnet; else scan_cli; fi
}

report() {
  curl -fsS -u "admin:${ADMIN_PASSWORD}" \
    "${HOST_URL}/api/issues/search?componentKeys=${PROJECT_KEY}&resolved=false&ps=500" |
    jq '[.issues[] | {message: .message, severity: .severity, component: .component, line: .line}]' \
      >sonar-issues.json
}

case "${1:-full}" in
  up) up ;;
  setup) setup ;;
  scan) scan ;;
  report) report ;;
  full) up && setup && scan ;;
  *)
    echo "usage: scripts/sonar.sh [up|setup|scan|report|full]" >&2
    exit 64
    ;;
esac
