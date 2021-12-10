FROM ubuntu:20.04
WORKDIR /src_frontend
RUN apt-get update
RUN   apt-get install -y sudo \
&&    apt-get install -y curl \
&&    apt-get install -y screen \
#&&    apt-get install -y python3 \
#&&    sudo apt-get -y install python3-distutils \
#&&    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py \
#&&    python3 get-pip.py \
#&&    pip3 install flask flask-cors \ 
&&    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - \
&&    sudo apt-get install -y nodejs \
&&    npm install npm@latest \
&&    npm install 
CMD ["./start_frontend.sh"]

