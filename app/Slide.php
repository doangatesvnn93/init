<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
    protected $table = 'g_slide';

    protected $fillable = ['name', 'link', 'status'];

    public static function validate($data)
    {

        $validate = array(
            'name' => false,
            'link' => false,
            'error' => false
        );
        if (!$data->name) {
            $validate['name'] = true;
            $validate['error'] = true;
        };
        if (!$data->link) {
            $validate['link'] = true;
            $validate['error'] = true;
        };

        return (object) $validate;
    }
}
