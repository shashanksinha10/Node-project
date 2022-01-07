
// @description    get all bootcamps
// @route           get /api/v1/bootcamps
// @accesss         public
exports.getBootcamps =  (req, res, next) => {
    res.status(200).json({ sucess: true, msg: "show all data" })
}

// @description     get all bootcamps
// @route           get /api/v1/bootcamps/:id
// @accesss         public
exports.getBootcamp =  (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `Get data ${req.params.id}` })
}


// @description     create new bootcamps
// @route           put /api/v1/bootcamps
// @accesss         private
exports.createBootcamps =  (req, res, next) => {
    res.status(200).json({ sucess: true, msg: "create new data" })
}

// @description     update new bootcamps
// @route           put /api/v1/bootcamps/:id
// @accesss         private
exports.updateBootcamps =  (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `update data ${req.params.id}` })
}

// @description     delete bootcamps
// @route           get /api/v1/bootcamps/:id
// @accesss         public
exports.deleteBootcamps =  (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `update delete ${req.params.id}` })
}