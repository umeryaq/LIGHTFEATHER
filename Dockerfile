FROM node:16-alpine AS BUILD_IMAGE

WORKDIR /usr/src/assessment

COPY package*.json ./

# install dependencies
RUN npm ci

COPY . .

RUN npm run build

# remove development dependencies
#RUN npm prune --production

FROM node:16-alpine

WORKDIR /usr/src/assessment

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/assessment/build ./build
# COPY --from=BUILD_IMAGE /usr/src/assessment/node_modules ./node_modules

RUN yarn global add serve
# serve the build
CMD ["serve", "-s", "build"]