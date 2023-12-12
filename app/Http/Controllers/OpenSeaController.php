<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OpenSeaController extends Controller
{
    public function fetchNFTs()
    {
        $response = Http::get('https://api.opensea.io/api/v1/assets', [
            'order_direction' => 'desc',
            'offset' => '0',
            'limit' => '10',
            'order_by' => 'sale_count',
            'api_key' => '"59e6e3daaf244a45b432e428a1bcc2ee',
        ]);

        // return response()->json($response->json());
        return $response;
    }
}
