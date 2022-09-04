<template>
    <div v-if="submitted">
      <VayaSections :sections="sections"></VayaSections>
    </div>
</template>

<script>
import VayaSections from '../components/VayaSections.vue';
//
import SectionDataService from "../services/SectionDataService";
import ProviderDataService from "../services/ProviderDataService";


export default {
  name: 'VayaSectionsBlock',
  components: {
    VayaSections,
  },
  data() {
    return {
      provider_id: null,
      sections: null,
      submitted: false,
    };
  },
  methods: {
    findSections() {
      ProviderDataService.getActive()
        .then(response => {
          this.provider_id = response.data.id;
          console.log(this.provider_id);
          SectionDataService.findByProviderId(this.provider_id)
            .then(response => {
              this.sections = response.data;
              console.log(this.sections);
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  created: function() {
    this.findSections();
  },


}
</script>

<style scoped>

</style>
