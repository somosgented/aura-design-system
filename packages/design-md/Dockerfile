# Build from monorepo root:
#   docker build -f packages/design-md/Dockerfile -t aura-design-md .
#
# Runs scripts/prepare-public.cjs and serves public/ on Cloud Run (port 3000)
# with the markdown content type.

FROM node:22.23.4-alpine AS prepare
WORKDIR /src/packages/design-md
COPY packages/registry/registry/default/styles/main.css packages/registry/registry/default/styles/overlay.css /src/packages/registry/registry/default/styles/
COPY packages/design-md/package.json ./package.json
COPY packages/design-md/scripts ./scripts
COPY packages/design-md/designs ./designs
COPY packages/design-md/DESIGN.md packages/design-md/index.html packages/design-md/detail.html packages/design-md/result.html packages/design-md/designs.json packages/design-md/aura-mark.png packages/design-md/favicon.ico packages/design-md/favicon.svg packages/design-md/apple-touch-icon.png ./
RUN node scripts/prepare-public.cjs

FROM nginx:1.27-alpine AS runner
ENV PORT=3000
RUN rm -f /etc/nginx/conf.d/default.conf
COPY packages/design-md/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=prepare /src/packages/design-md/public /usr/share/nginx/html
EXPOSE 3000
