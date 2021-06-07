class AppError {
  constructor(msg, status) {
    this.msg = msg
    this.status = status
  }
}

module.exports = AppError