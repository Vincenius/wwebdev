#!/bin/bash
set -e
set -o pipefail

# INSTALL AWSCLI
pip install --user awscli

# INSTALL DEPENDENCIES
npm i

# EXPORT
npm run export

# DEPLOY
npm run deploy
