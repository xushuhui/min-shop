## banner
GET /banner/:id
## theme
GET /themes
GET /theme/:id
POST /theme/:tid/product/:pid
DELETE /theme/:tid/product/:pid
## product
POST /product
DELETE /product/:id

GET /product/by_category/paginate
GET  /product/by_category
GET  /product/:id
GET  /product/recent


## Category
GET /categories
GET /category/:id
GET /category/all\
GET /category/:id/products

## Token
POST /token
POST /token/verify
POST /token/app


## Address
POST /address
GET /address


## Order
POST /order
GET /order/:id
PUT /order/delivery
GET /order/by_user
GET /order/paginate


## Pay
POST /pay/pre_order
POST /pay/notify
POST /pay/re_notify
POST /pay/concurrency



