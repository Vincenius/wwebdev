# Multi-stage build for the Astro (Node adapter, middleware mode) app.
# Served by server.mjs, which applies security headers to every response.
FROM node:22-slim AS base
ENV TZ=UTC
WORKDIR /app
RUN corepack enable

FROM base AS build
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable
COPY . .
# TZ=UTC (baked into the build script) keeps JSON-LD dates deterministic.
RUN yarn build

FROM base AS runtime
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.mjs /app/securityHeaders.mjs /app/package.json ./
EXPOSE 4321
CMD ["node", "server.mjs"]
