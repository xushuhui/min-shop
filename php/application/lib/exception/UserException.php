<?php
/**
 * Created by xushuhui.
 * Author: xushuhui
 * 微信公号：互联网工程师
 * 知乎ID: 徐曙辉
 * Date: 2017/2/25
 * Time: 16:18
 */

namespace app\lib\exception;


class UserException extends BaseException
{
    public $code = 404;
    public $msg = '用户不存在';
    public $errorCode = 60000;
}