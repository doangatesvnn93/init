@extends('layouts.default')
@section('content')
    @include('landing.intro')
    <main id="main">
        @include('page.landing.about')
        @include('page.landing.service')
        @include('page.landing.calltoaction')
        @include('page.landing.skill')
        @include('page.landing.fact')
        @include('page.landing.portfolio')
        @include('page.landing.client')
        @include('page.landing.testiminal')
        @include('page.landing.team')
    </main>
@endsection