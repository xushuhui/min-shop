<?php
/**
 * Created by xushuhui
 * Author: xushuhui
 * 微信公号: 互联网工程师
 * 知乎ID: 徐曙辉
 * Date: 2017/3/7
 * Time: 16:10
 */

namespace app\lib\enum;


class OrderStatusEnum
{
    // 待支付
    const UNPAID = 1;

    // 已支付
    const PAID = 2;

    // 已发货
    const DELIVERED = 3;

    // 已支付，但库存不足
    const PAID_BUT_OUT_OF = 4;

    // 已处理PAID_BUT_OUT_OF
    const HANDLED_OUT_OF = 5;
}