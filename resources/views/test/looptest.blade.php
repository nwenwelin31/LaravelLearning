@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="col-md-6">
                    <div class="form-group">
                         <form action="">
                            <label for="">Categories</label>
                        <select class="form-control input-sm" name="category" id="category">
                             @foreach($users as $user)
                               <option value="{{$user->id}}">{{$user->name}}</option>
                             @endforeach
                        </select>
                        @if ($errors->has('category'))
                            <span class="help-block">
                                <strong>{{ $errors->first('category') }}</strong>
                            </span>
                        @endif
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
