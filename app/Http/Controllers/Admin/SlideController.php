<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Slide;

class SlideController extends \App\Http\Controllers\InitController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if ($request->isMethod('post')) {
            $validate = Slide::validate($request);
            if ($validate->error == false) {
                Slide::create(array(
                    'name' => $request->name,
                    'link' => $request->link,
                    'status' => $request->status
                ));
                $this->setFlashData('success', 'Successfully!');
            } else {
                $this->setFlashData('fail', 'Fail!');
                return view('admin.slider.create', array('error' => $validate, 'data' => $request));
            }
        }
        return view('admin.slider.create');
    }

    public function list(Request $request)
    {
        $listSlider = Slide::where('status', '<>', null)->paginate(5);
        return view('admin.slider.list', array('listSlider' => $listSlider));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $request = request();
        if ($request->isMethod('post')) {
            $validate = Slide::validate($request);
            if ($validate->error == false) {
                Slide::where('id', $id)->update(array(
                    'name' => $request->name,
                    'link' => $request->link,
                    'status' => $request->status
                ));
                $this->setFlashData('success', 'Successfully!');
            } else {
                $this->setFlashData('fail', 'Fail!');
                return view('admin.slider.create', array('error' => $validate, 'data' => $request));
            }
        }
        $slide = Slide::where('id', $id)->first();
        return view('admin.slider.edit', array('slide' => $slide));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
