<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUsModel extends Model
{
    protected $table = 'msgContactUs';
    public $primarykey = 'id';
    public $timestamp = true;
}
