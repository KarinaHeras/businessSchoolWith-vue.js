<template>
  <div>
    <my-header :studentItemCount="studentItemCount"></my-header>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">Student Information</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4><strong>Enter the information  the student</strong></h4>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>First Name:</strong>
                <input v-model.trim="order.firstName" class="form-control" />
              </div>
              <div class="col-md-6">
                <strong>Last Name:</strong>
                <input v-model.trim="order.lastName" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>Address:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>City:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-2">
                <strong>State:</strong>
                <select v-model="order.state" class="form-control">
                  <option disabled value="">State</option>
                  <option v-for="(state, key) in states" v-bind:value="state">
                    {{key}}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>Zip / Postal Code:</strong>
                <input v-model.number="order.zip"
                       class="form-control"
                       type="number" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input type="checkbox"
                       id="faultReport" value="true"
                       v-bind:true-value="order.sendFaultReport"
                       v-bind:false-value="order.dontSendFaultReport"
                       v-model="order.faultReport">
                <label for="faultReport">Send Fault Report?</label>
              </div>
            </div><!-- end of form-group -->
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input type="radio"
                       id="Truancy"
                       v-bind:value="order.truancy"
                       v-model="order.method">
                <label for="Truancy">Truancy</label>
                <input type="radio"
                       id="excessOfFouls"
                       v-bind:value="order.excessOfFouls"
                       v-model="order.method">
                <label for="excessOfFouls">excessOfFouls</label>
              </div>
            </div><!-- end of form-group-->
            <div class="form-group">
              <div class="col-md-6">
                <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">Send Report</button>
              </div><!-- end of col-md-6-->
            </div><!-- end of form-group-->
            <div class="col-md-12 verify">
              <pre>
                        First Name: {{order.firstName}}
                        Last Name: {{order.lastName}}
                        Address: {{order.address}}
                        City: {{order.city}}
                        Zip: {{order.zip}}
                        State: {{order.state}}
                        Method: {{order.method}}
                        faultReport: {{order.faultReport}}
              </pre>
            </div><!-- end of col-md-12 verify-->
          </div><!--end of panel-body-->
        </div><!--end of panel panel-info-->
      </div><!--end of col-md-10 col-md-offset-1-->
    </div><!--end of row-->
  </div>
</template>

<script>
  import MyHeader from './Header.vue';
  export default {
    name: 'Form',
    props: ['studentItemCount'],
    data() {
      return {
        states: {
          AL: 'Alicante',
          MA: 'Madrid',
          BC: 'Barcelona',
          VA: 'Valencia',
          PS: 'Pais Vasco'
        },
        order: {
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          zip: '',
          state: '',
          method: 'Truancy',
          excessOfFouls: 'Excess Of Fouls',
          truancy: 'Truancy',
          faultReport: '',
          sendFaultReport: 'Send Fault Report',
          dontSendFaultReport: 'Do Not Send Fault Report'
        }

      }
    },
    components: { MyHeader },
    methods: {
      submitForm() {
        alert('Report Sent');
      }
    }
  }</script>

