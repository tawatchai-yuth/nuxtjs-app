<template>
  <b-container class="mt-5">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            maxLength="50"
            placeholder="Title"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Description:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            type="text"
            maxLength="500"
            placeholder="Description"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Image:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.image"
            type="text"
            placeholder="Image"
          >
          </b-form-input>
          <br />
          Selected file: {{ form.image }}
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </b-container>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          image: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();

         let data = {
           title: this.form.title,
           description: this.form.description,
           image: this.form.image
         }

        var titleLength = data.title.length;
        var descriptionLength = data.description.length;
        
         axios({
           method: 'post',
           url: 'http://localhost:3200/v1/api/post',
           data: {
              title: this.form.title,
              description: this.form.description,
              image: this.form.image
           }
         })
         .then(res => {
           console.log(res.data.status);
           const check = res.data.status;
           if(check == 1){
              alert("บันทึกข้อมูลสำเร็จ");
           }else if(check == 2){
              alert("Tile มีข้อความเกิน 50 ตัวอักษร / Description มีข้อความเกิน 500 ตัวอักษร");
           }else if(check == 3){
              alert("Tile มีข้อความเกิน 50 ตัวอักษร");
           }else if(check == 4){
              alert("Description มีข้อความเกิน 500 ตัวอักษร");
           }else{
              alert("ต้องกรอกข้อมูลให้ครบทุกช่อง");
           }
         })
         .catch(err => {
           console.log(err);
         });
      },
      onReset(event) {
        event.preventDefault()
        this.form.email = ''
        this.form.description = ''
        this.form.image = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>