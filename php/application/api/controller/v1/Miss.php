<?php
/**
 * Created by 七月.
 * User: 七月
 * Date: 2017/2/15
 * Time: 1:00
 */

namespace app\api\controller\v1;
use app\lib\exception\MissException;

use think\Controller;

/**
 * MISS路由，当全部路由没有匹配到时
 * 将返回资源未找到的信息
 */
class Miss extends Controller
{
    public function miss()
    {
        throw new MissException();
    }
}