# 基于 node:18.15.0 镜像构建
FROM node:18.15.0-alpine

# 设置工作目录
WORKDIR /app

# 启用 corepack，安装 pnpm，设置存储路径和镜像源
RUN npm config set registry https://registry.npmmirror.com/

# 复制源代码到工作目录
COPY . /app

# 安装依赖
RUN npm install

# 执行构建命令
RUN npm build

# 设置容器启动命令
CMD [ "node", ".output/server/index.mjs" ]
