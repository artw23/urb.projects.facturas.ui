rm -rf ./build
npm run build
docker build -t urb/facturacion-react .
