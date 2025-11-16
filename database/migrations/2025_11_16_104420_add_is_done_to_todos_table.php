<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('todos', function (Blueprint $table) {
            if (!Schema::hasColumn('todos', 'is_done')) {
                $table->boolean('is_done')->default(false);
            }
        });
    }

    public function down()
    {
        Schema::table('todos', function (Blueprint $table) {
            if (Schema::hasColumn('todos', 'is_done')) {
                $table->dropColumn('is_done');
            }
        });
    }
};
