<template>
  <div>
    <b-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      v-if="show"
      id="form"
      enctype="multipart/form-data"
    >
      <b-form-group
        id="input-group-1"
        label="Email address"
        label-for="input-1"
        description="The information you provide will stay private"
      >
        <b-form-input
          id="input-1"
          v-model="form.emailAddress"
          type="email"
          required
          placeholder="Enter Email address"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Full Name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.fullName"
          type="text"
          required
          placeholder="Enter FullName"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.subjects"
          :options="subjectList"
          required
          placeholder="Select a Subject"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-4" label="Description:" label-for="input-4">
        <b-form-textarea
          id="input-4"
          v-model="form.description"
          type="text"
          rows="5"
          required
          placeholder="Please explain the problem and section where student need a help with it"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="Please attach supportive document (if any)"
        label-for="input-5"
      >
        <b-form-file
          id="input-5"
          v-model="docs"
          :state="Boolean(docs)"
          drop-placeholder="Drop it here..."
          placeholder="Choose a file or zip folder"
        ></b-form-file>
        <b-button @click="clearFile">Delete the file</b-button>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      docs: null,
      form: {
        emailAddress: "",
        fullName: "",
        subjects: "",
        description: ""
      },
      show: true,
      subjectList: ["C#", "Java"]
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const formData = new FormData();
        if (this.docs != null) {
          console.log(this.docs);
          formData.append("docs", this.docs, this.docs.name);

          this.form["docs"] = formData;
          console.log(this.form);
        }
        await axios.post("http://localhost:3000/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    clearFile() {
      this.docs = null;
      delete this.form.docs;
    }
  }
};
</script>
<style  lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: "Merriweather Sans", sans-serif;
}
#form {
  color: rgb(0, 0, 0);
  background-color: #7ed6f8;
  border-radius: 20px;

  min-width: 25%;
  padding: 40px;
  margin: auto;

  -webkit-box-shadow: -1px 3px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 3px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 3px 18px 0px rgba(0, 0, 0, 0.75);

  display: inline-block;
}
</style>
