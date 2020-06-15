<template>
  <div class="formParentClass">
    <b-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      v-if="show"
      enctype="multipart/form-data"
    >
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          class="inputTextBox"
          id="input-1"
          v-model="form.emailAddress"
          type="email"
          required
          placeholder="Email address*"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.fullName"
          type="text"
          required
          placeholder="FullName*"
          class="inputTextBox"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="selectedLanguage"
          :options="options"
          required
          class="inputTextBox"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-4" label-for="input-4">
        <b-form-textarea
          class="inputTextBox"
          id="input-4"
          v-model="form.description"
          type="text"
          rows="5"
          required
          placeholder="Please explain the problem*"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group id="input-group-5" label-for="input-5">
        <b-form-file
          id="input-5"
          v-model="docs"
          :state="Boolean(docs)"
          drop-placeholder="Drop it here..."
          placeholder="Choose a file or zip folder"
        ></b-form-file>
        <b-button @click="clearFile" class="cstm-btn">Remove</b-button>
      </b-form-group>
      <b-button type="submit" variant="primary" class="cstm-btn"
        >Submit</b-button
      >
      <b-button type="reset" variant="danger" class="cstm-btn">Reset</b-button>
      <br />
      <label class="info">The information you provide will stay private</label>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedLanguage: null,
      docs: null,
      form: {
        emailAddress: "",
        fullName: "",
        description: "",
      },
      show: true,
      options: [
        { value: null, text: "Select a language*" },
        { value: "C#", text: "C#" },
        { value: "Java", text: "Java" },
      ],
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        let formData = new FormData();
        formData.append("emailAddress", this.form.emailAddress);
        formData.append("fullName", this.form.fullName);
        formData.append("language", this.selectedLanguage);
        formData.append("description", this.form.description);
        formData.append("doc", this.docs);
        if (this.docs != null) {
          this.form["docs"] = this.docs;
        }
        await axios
          .post("http://localhost:3000/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((Response) => {
            console.log(Response.data);
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
    },
  },
};
</script>
<style lang="scss" scoped>
.formParentClass {
  width: auto;
  background-color: #17a2b8;
  border-radius: 10px 10px 10px 10px;

  padding: 40px;
  margin: auto;
  height: auto;
  display: inline-block;
}
.inputTextBox {
  display: block;
  width: 100%;
  background: #f2f2f2;
  //color attribute added only for the select tag option, the text color wasn't picking up the inherit option.
  color: #757474;
  border-radius: 3px;
  font-size: 15px;
  line-height: 1.2;
}
.info {
  color: #f7ecec;
  border-radius: 2px;
}
.cstm-btn {
  margin-top: 5px;
  margin-right: 10px;
}
</style>
