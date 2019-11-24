<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">HOME</a>
        </nav>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <input type="text" placeholder="Insert a Task" class="form-control">
                                </div>
                                <div class="form-group">
                                    <textarea name="description" id="" cols="30" rows="10" class="form-control" placeholder="Insert your description"></textarea>
                                </div>
                                <button class="btn btn-primary btn-block">Add Task</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>