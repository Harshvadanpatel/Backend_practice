class ApiResponse{
    constructor(statusCode,data,message = "Success"){
        this.statusCode = statusCode
        this.data=  datathis.message
        this.success = statusCode<400

    }
}