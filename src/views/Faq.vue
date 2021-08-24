<template>
    <div class="accordion faq" role="tablist">
        <b-card no-body class="mb-1" style="border-radius: 5px;">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="light" style="width: 100%; text-align: left;">Accordion 1
                    <span class="when-opened faq-icon" style="color: text-align: right;">
                      <font-awesome-icon icon="chevron-up" />
                    </span>
                    <span class="when-closed faq-icon">
                      <font-awesome-icon icon="chevron-down" />
                    </span>
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

    <b-card no-body class="mb-1" style="border-radius: 5px;">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="light" style="width: 100%;">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1" style="border-radius: 5px;">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="light"  style="width: 100%;">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Faq',
  components: {
  },
    data() {
      return {
          
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
}
</script>