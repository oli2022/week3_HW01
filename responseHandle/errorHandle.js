const errorHandle = (res, err) => {
    res.status(400).json({
        status: '結果：失敗',
        message: '欄位沒有正確',
        err,
    });
};

const deleteError = (res, err) => {
    res.status(400).json({
        status: '結果：失敗',
        message: '無此 id',
        err,
    });
};

module.exports = { errorHandle, deleteError };
