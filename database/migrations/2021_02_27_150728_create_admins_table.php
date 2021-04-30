<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('intuId')->nullable();
            $table->string('salutation')->nullable();
            $table->string('name')->nullable();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->date('dob')->nullable();
            $table->string('gender')->nullable();
            $table->string('contactno')->nullable();
            $table->string('alternatePhoneNo')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('category')->nullable();
            $table->string('department')->nullable();
            $table->boolean('status')->default(0);
            $table->timestamp('email_verified_at')->nullable();
            $table->unsignedBigInteger('employeeId')->nullable();
            $table->unsignedBigInteger('addressId')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
