<template>
  <div id="main-app" class="container">
    <div class="row justify-content-center">
      <add-appointment @add="addItem"></add-appointment>
      <search-appointments
        @searchRecords="SearchAppointments"
        :myKey="filterKey"
        :myDir="filterDir"
        @requestKey="changeKey"
        @requestDir="changeDir"
      ></search-appointments>
      <appointment-list :appointments="filteredApts" @remove="removeItem" @edit="editItem"></appointment-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppointmentList from './components/AppointmentList.vue';
import AddAppointment from './components/AddAppointment.vue';
import SearchAppointments from './components/SearchAppointments.vue';
import _ from 'lodash';

export default {
  name: 'MainApp',
  data: function() {
    return {
      title: 'Appointment List',
      appointments: [],
      filterKey: 'petName',
      filterDir: 'asc',
      searchTerms: '',
      aptIndex: 0,
    };
  },
  components: {
    AppointmentList,
    AddAppointment,
    SearchAppointments,
  },
  mounted: function() {
    axios.get('./data/appointments.json').then(
      (response) =>
        (this.appointments = response.data.map((item) => {
          item.aptId = this.aptIndex;
          this.aptIndex++;
          return item;
        }))
    );
  },
  computed: {
    searchedApts: function() {
      return this.appointments.filter((item) => {
        return (
          item.petName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase())
        );
      });
    },
    filteredApts: function() {
      return _.orderBy(
        this.searchedApts,
        (item) => {
          return item[this.filterKey].toLowerCase();
        },
        this.filterDir
      );
    },
  },
  methods: {
    removeItem: function(apt) {
      this.appointments = _.without(this.appointments, apt);
    },
    editItem: function(id, field, text) {
      const aptIndex = _.findIndex(this.appointments, {
        aptId: id,
      });
      this.appointments[aptIndex][field] = text;
    },
    addItem: function(apt) {
      apt.aptId = this.aptIndex;
      this.aptIndex++;
      this.appointments.push(apt);
    },
    SearchAppointments: function(terms) {
      this.searchTerms = terms;
    },
    changeKey : function(value) {
      this.filterKey = value;
    },
    changeDir: function(value) {
      this.filterDir = value;
    }

  },
};
</script>
