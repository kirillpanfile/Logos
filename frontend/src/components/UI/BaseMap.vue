<template>
  <div ref="map">Map</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "BaseMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = L.map(this.$refs.map, {
      center: [55.762115, 37.229132],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
    }).setView([55.84, 37.24], 13);
    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 14,
        minZoom: 14,
        id: "mapbox.streets",
      }
    ).addTo(this.map);
    const icon = L.icon({
      iconUrl: `https://lh3.googleusercontent.com/QPR2KHD6w9bTF802-HCucThyAg7SwfyGsdpI05pLgtl--3rDmS8WE_3U6UcySWKKEeunrasPQdElIf930DcQuqYk2EJMJXoB1RZodqDF5OdJV9Tvi2qIsnNQOEwzosHEmwuz4Mz63zOT7PLi2zi5GQ43nMH57bOAtmWbZeteydaaE45mwvIi6WHM7lZ0Jk-Z8tOQM5wfz6aEw252VEPCM56-lyoDrLCaCiN57ikaBxl9f815YMnXsCirID8TDyUbftXKnm7N3pjTn6c7mIRHrhAZjZUX4gtgSqJ8JhcbRzOMjevcfACfGQMhVBKIG-Dn9RYZKBMvvhvRIiiJagEzRqE6vCT6ivsspJxy4Q-VgTgjmCJfU5hd-GxsG8bWkE-Hen4jSFk0w7pFtA4niN0rh7wmPmFNW7W4UMbi0AhzLNbDzt8pUWFFaMfIEZzsBr48oa3FuNoGetixFSF8pG-nCumf2l0mi-tXoGCGkW2o4044h90JQNemzHI9RG27W5itCRW0h9fwhGodoG5-pWC_6yDS6Nxrxmr4XnD_w2CNlkMRvnfmtozMyE-s_aXm3_goCQmNmNnhT2c-bvsSdDV4CHOSOGlw4rMU4grbCLfPBEj4X3iTeO9TRd6pVqpO-EEn7ysGL_c5EfSSyJHT39wPi_6BCh6VFwHe1JxBVbGVhu_C_FAcZvzAlmcuah1sVt3NhlwE3Y3B2YgEQNa1CwS7hNJFZprBV7KfJ-0xrY_y1thbrY3aELhOcvjd_m8Km9ZFcqWRDQzzBh3RpS8D6ItHFpQUesHlAfkAtpaoDA_nIQOje9jwu16q_IgihsBjG0sqjp8wgpNXXpKbm7cq8YzhRjUrHoS78kARi4GJ_bXhYQ=w98-h112-no?authuser=0`,
      iconSize: [98, 112],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    L.marker([55.84, 37.25], { icon }).addTo(this.map);
  },
};
</script>

<style></style>
