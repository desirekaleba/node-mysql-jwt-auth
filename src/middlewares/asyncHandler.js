const asyncHandler = (cb) => async (req, res, next) => {
    try {
        await cb(req, res, next);
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
    return true;
}

module.exports = {
    asyncHandler
}