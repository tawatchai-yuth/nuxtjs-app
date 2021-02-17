<template>
  <b-container class="mt-5">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="Enter title"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Description:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            placeholder="Description"
            required
          ></b-form-input>
        </b-form-group>

        <!-- <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div> -->

        <!-- Plain mode -->
        <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div> -->

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
  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          image: ''
        },
        show: true,
        file1: null,
        file2: null
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.description = ''
        this.form.file2 = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>