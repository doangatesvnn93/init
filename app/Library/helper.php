<?php
namespace helper;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
class helper
{
    public function setFlashData($status = 'success', $message = 'Successfully!')
    {
        $request = request();
        $request->session()->flash('status', $status);
        $request->session()->flash('flash-message', $message);
    }

    public function removeSign($string, $seperator = '-', $allowANSIOnly = false)
    {
        $pattern = array(
            "a" => "å|ä|á|à|ạ|ả|ã|Á|À|Ạ|Ả|Ã|ă|ắ|ằ|ặ|ẳ|ẵ|Ă|Ắ|Ằ|Ặ|Ẳ|Ẵ|â|ấ|ầ|ậ|ẩ|ẫ|Â|Ấ|Ầ|Ậ|Ẩ|Ẫ|Ä|Å",
            "o" => "ó|ò|ọ|ỏ|õ|Ó|Ò|Ọ|Ỏ|Õ|ô|ố|ồ|ộ|ổ|ỗ|Ô|Ố|Ồ|Ộ|Ổ|Ỗ|ơ|ớ|ờ|ợ|ở|ỡ|Ơ|Ớ|Ờ|Ợ|Ở|Ỡ",
            "e" => "é|è|ẹ|ẻ|ẽ|É|È|Ẹ|Ẻ|Ẽ|ê|ế|ề|ệ|ể|ễ|Ê|Ế|Ề|Ệ|Ể|Ễ",
            "u" => "ú|ù|ụ|ủ|ũ|Ú|Ù|Ụ|Ủ|Ũ|ư|ứ|ừ|ự|ử|ữ|Ư|Ứ|Ừ|Ự|Ử|Ữ",
            "i" => "í|ì|ị|ỉ|ĩ|Í|Ì|Ị|Ỉ|Ĩ",
            "y" => "ý|ỳ|ỵ|ỷ|ỹ|Ý|Ỳ|Ỵ|Ỷ|Ỹ",
            "d" => "đ|Đ",
            "c" => "ç",
        );
        while (list($key, $value) = each($pattern)) {
            $string = preg_replace('/' . $value . '/i', $key, $string);
        }
        if ($allowANSIOnly) {
            $string = strtolower($string);
            $string = preg_replace(array('/[^a-zA-Z0-9 -]/', '/[ -]+/', '/^-|-$/'), array('', $seperator, ''), $string);
        }
        return $string;
    }
}