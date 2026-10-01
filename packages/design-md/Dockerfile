# Build from monorepo root:
#   docker build -f packages/design-md/Dockerfile -t aura-design-md .
#
# Runs scripts/prepare-public.cjs (same as the Vercel buildCommand) and serves
# public/ on port 3000, including the /dark rewrite and DESIGN.md content type.

FROM node:20-alpine AS prepare
WORKDIR /src
COPY packages/design-md/package.json ./package.json
COPY packages/design-md/scripts ./scripts
COPY packages/design-md/DESIGN.md packages/design-md/index.html packages/design-md/preview.html packages/design-md/preview-dark.html ./
RUN node scripts/prepare-public.cjs

FROM nginx:1.27-alpine AS runner
ENV PORT=3000
RUN rm -f /etc/nginx/conf.d/default.conf
COPY packages/design-md/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=prepare /src/public /usr/share/nginx/html
EXPOSE 3000
