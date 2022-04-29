// Exported because used by the cypress tests: They route API requests to the fixtures instead.
export const urlPrefix = 'https://storage.googleapis.com/webatlas-vitessce-data/0.0.3/master_release';


/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */
// Note that the ordering of the components in the staticLayout
// can affect the z-index of plot tooltips due to the
// resulting ordering of elements in the DOM.
export const configs = {
  bm01: {
    name: 'Sample 1 (15276 cells) Simpler Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1 (15276 cells) Simpler Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x1.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm02: {
    name: 'Sample 1.1 (15276 cells) Original Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1.1 (15276 cells) Original Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x1-poly.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm03: {
    name: 'Sample 1.2 (15276 cells) Centroids',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1.2 (15276 cells) Centroids',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x1-centroid.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm04: {
    name: 'Sample 1.3 (15276 cells) raster cell segmentation [tif]',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1.3 (15276 cells) raster cell segmentation [tif]',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                {
                  name: 'My OME-TIFF Mask',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/39bfafda600ff69122887bce04f4efb88f767caa/various_label_formats/out_opt_flow_registered_label_expanded.tif',
                  type: 'ome-tiff',
                  metadata: {
                    isBitmask: true,
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm05: {
    name: 'Sample 1.4 (15276 cells) raster cell segmentation [bioformats2raw v0.2.6]',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1.4 (15276 cells) raster cell segmentation [bioformats2raw v0.2.6]',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              renderLayers: ['Whole Embryo Sample', 'Cell Segmentations'],
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Cell Segmentations',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/39bfafda600ff69122887bce04f4efb88f767caa/various_label_formats/out_opt_flow_registered_label_expanded_0.2.6',
                  type: 'zarr',
                  metadata: {
                    isBitmask: true,
                    dimensions: [
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'Cells',
                        ],
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm06: {
    name: 'Sample 1.5 (15276 cells) raster cell segmentation [bioformats2raw v0.3.0]',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1.5 (15276 cells) raster cell segmentation [bioformats2raw v0.3.0]',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              renderLayers: ['Cell Segmentations', 'Whole Embryo Sample'],
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                {
                  name: 'Cell Segmentations',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/39bfafda600ff69122887bce04f4efb88f767caa/various_label_formats/out_opt_flow_registered_label_expanded_0.3.0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'Cells',
                        ],
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm07: {
    name: 'Sample 1.6 (15276 cells) raster cell segmentation [bioformats2raw v0.2.6] - Additional Components',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1.6 (15276 cells) raster cell segmentation [bioformats2raw v0.2.6] - Additional Components',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              renderLayers: ['Whole Embryo Sample', 'Cell Segmentations'],
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Cell Segmentations',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/39bfafda600ff69122887bce04f4efb88f767caa/various_label_formats/out_opt_flow_registered_label_expanded_0.2.6',
                  type: 'zarr',
                  metadata: {
                    isBitmask: true,
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'Cells',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.cell-sets.json',
            type: 'cell-sets',
            fileType: 'cell-sets.json',
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.clusters.json',
            type: 'expression-matrix',
            fileType: 'clusters.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'X_pca',
        UMAP: 'X_umap',
      },
      spatialZoom: {
        A: -5.5,
      },
      spatialTargetX: {
        A: 16000,
      },
      spatialTargetY: {
        A: 20000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 4, h: 4 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 2 },
      { component: 'cellSets',
        x: 9, y: 3, w: 3, h: 2 },
      { component: 'heatmap',
        props: {
          transpose: true,
        },
        x: 2, y: 4, w: 5, h: 2 },
      { component: 'cellSetExpression',
        x: 7, y: 4, w: 3, h: 2 },
      { component: 'expressionHistogram',
        x: 10, y: 4, w: 2, h: 2 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'PCA',
          embeddingZoom: 'PCA',
        },
        x: 6, y: 0, w: 3, h: 2 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'UMAP',
          embeddingZoom: 'UMAP',
        },
        x: 6, y: 2, w: 3, h: 2 },
    ],
  },
  bm08: {
    name: 'Sample 2 (30552 cells) Simpler Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 2 (30552 cells) Simpler Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x2.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm09: {
    name: 'Sample 2.1 (30552 cells) Simplest Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 2.1 (30552 cells) Simplest Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x2.simplest.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm10: {
    name: 'Sample 3 (45828 cells) Simpler Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 3 (45828 cells) Simpler Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x3.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm11: {
    name: 'Sample 4 (61104 cells) Simpler Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 4 (61104 cells) Simpler Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x4.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm12: {
    name: 'Sample 5 (76380 cells) Simpler Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 5 (76380 cells) Simpler Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x5.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm13: {
    name: 'Sample 6 (91656 cells) Simpler Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 6 (91656 cells) Simpler Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x6.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm14: {
    name: 'Sample 7 (106932 cells) Simpler Polygons',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 7 (106932 cells) Simpler Polygons',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/1/sample-x7.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm15: {
    name: 'Visium sample 1',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Visium sample 1',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              renderLayers: ['Whole Embryo Sample', 'Cell Segmentations'],
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Cell Segmentations',
                  url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/144600_label_zarr/',
                  type: 'zarr',
                  metadata: {
                    isBitmask: true,
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'Cells',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/144600_zarr/',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01',
                          'c02',
                          'c03',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.cell-sets.json',
            type: 'cell-sets',
            fileType: 'cell-sets.json',
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/scale_test/3/sample.clusters.json',
            type: 'expression-matrix',
            fileType: 'clusters.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm16: {
    name: 'Visium Sample 3',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Visium Sample 3',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/Visium/144600',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c02 DAPI',
                          'c03 DAPI',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm17: {
    name: 'Visium Sample 1.1 (15276 cells) raster cell segmentation [bioformats2raw v0.2.6] - Additional Components',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Sample 1.6 (15276 cells) raster cell segmentation [bioformats2raw v0.2.6] - Additional Components',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              renderLayers: ['Whole Embryo Sample', 'Cell Segmentations'],
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Cell Segmentations',
                  url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/144600_label_zarr/',
                  type: 'zarr',
                  metadata: {
                    isBitmask: true,
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'Cells',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/144600_zarr/',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/1.cells.json',
            type: 'cells',
            fileType: 'cells.json',
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/1.cell-sets.json',
            type: 'cell-sets',
            fileType: 'cell-sets.json',
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/1.clusters.json',
            type: 'expression-matrix',
            fileType: 'clusters.json',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        UMAP: 0.75,
      },
      embeddingType: {
        UMAP: 'X_spatial',
      },
      spatialZoom: {
        A: -5.5,
      },
      spatialTargetX: {
        A: 16000,
      },
      spatialTargetY: {
        A: 20000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 7, h: 6 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 2 },
      { component: 'cellSets',
        x: 9, y: 3, w: 3, h: 2 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'UMAP',
          embeddingZoom: 'UMAP',
        },
        x: 9, y: 2, w: 3, h: 2 },
    ],
  },
  bm18: {
    name: 'Visium Sample 2',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Visium Sample 2',
        files: [
          {
            type: 'raster',
            fileType: 'raster.ome-zarr',
            url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/Visium/144600',
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        PCA: 0,
        UMAP: 0.75,
      },
      embeddingType: {
        PCA: 'PCA',
        UMAP: 't-SNE',
      },
      spatialZoom: {
        A: -5.8,
      },
      spatialTargetX: {
        A: 15000,
      },
      spatialTargetY: {
        A: 18000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 10, h: 8 },
    ],
  },
  bm19: {
    name: 'Visium Sample 4 (14968 cells) raster cell segmentation [bioformats2raw v0.2.6] - Zarr Single Cell Format - Additional Components',
    version: '1.0.0',
    description: 'ISS sample data',
    public: true,
    datasets: [
      {
        uid: 'sample',
        name: 'sample',
        description: 'Visium Sample 4 (14968 cells) raster cell segmentation [bioformats2raw v0.2.6] - Zarr Single Cell Format - Additional Components',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              renderLayers: ['Whole Embryo Sample', 'Cell Segmentations'],
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Cell Segmentations',
                  url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/144600_label_zarr/',
                  type: 'zarr',
                  metadata: {
                    isBitmask: true,
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'Cells',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                {
                  name: 'Whole Embryo Sample',
                  url: 'https://storage.googleapis.com/webatlas-vitessce-data/visium_144600/144600_zarr/',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'z',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/zarr/visium/visium_minimal_100genes_chunks.zarr',
            type: 'cells',
            fileType: 'anndata-cells.zarr',
            options: {
              xy: 'obsm/spatial',
              mappings: {
                Spatial: {
                  key: 'obsm/spatial',
                  dims: [0, 1],
                },
              },
              factors: [
                'obs/sample',
                'obs/total_counts',
              ],
            },
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/zarr/visium/visium_minimal_100genes_chunks.zarr',
            type: 'cell-sets',
            fileType: 'anndata-cell-sets.zarr',
            options: [
              {
                groupName: 'sample',
                setName: 'obs/sample',
              },
              {
                groupName: 'total_counts',
                setName: 'obs/total_counts',
              },
            ],
          },
          {
            url: 'https://storage.googleapis.com/webatlas-vitessce-data/zarr/visium/visium_minimal_100genes_chunks.zarr',
            type: 'expression-matrix',
            fileType: 'anndata-expression-matrix.zarr',
            options: {
              matrix: 'X',
            },
          },
        ],
      },
    ],
    initStrategy: 'auto',
    coordinationSpace: {
      embeddingZoom: {
        Spatial: 0.75,
      },
      embeddingType: {
        Spatial: 'Spatial',
      },
      spatialZoom: {
        A: -4.5,
      },
      spatialTargetX: {
        A: 12000,
      },
      spatialTargetY: {
        A: 10000,
      },
    },
    layout: [
      { component: 'description',
        x: 0, y: 0, w: 2, h: 1 },
      { component: 'layerController',
        x: 0, y: 1, w: 2, h: 4,
      },
      { component: 'status',
        x: 0, y: 5, w: 2, h: 1 },
      { component: 'spatial',
        coordinationScopes: {
          spatialZoom: 'A',
          spatialTargetX: 'A',
          spatialTargetY: 'A',
        },
        x: 2, y: 0, w: 7, h: 6 },
      { component: 'genes',
        x: 9, y: 0, w: 3, h: 2 },
      { component: 'cellSets',
        x: 9, y: 3, w: 3, h: 2 },
      { component: 'scatterplot',
        coordinationScopes: {
          embeddingType: 'Spatial',
          embeddingZoom: 'Spatial',
        },
        x: 9, y: 2, w: 3, h: 2 },
    ],
  },
  bm20: {
    name: 'ISS Human Brain Sample',
    version: '1.0.0',
    description: '',
    public: true,
    datasets: [
      {
        uid: 'iss-human-brain-advanced',
        name: 'iss-human-brain-advanced',
        description: 'In-situ Sequencing Human Brain Sample. Raster cell segmentation [bioformats2raw v0.2.6], with additional Vitessce components',
        files: [
          {
            type: 'raster',
            fileType: 'raster.json',
            options: {
              renderLayers: [
                'Microscopy Image',
                'Cells Segmentations',
              ],
              schemaVersion: '0.0.2',
              images: [
                {
                  name: 'Cells Segmentations',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/39bfafda600ff69122887bce04f4efb88f767caa/various_label_formats/out_opt_flow_registered_label_expanded_0.2.6',
                  type: 'zarr',
                  metadata: {
                    isBitmask: true,
                    dimensions: [
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'Cells'
                        ],
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },                
                {
                  name: 'Microscopy Image',
                  url: 'https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/da4b9237bacccdf19c0760cab7aec4a8359010b0',
                  type: 'zarr',
                  metadata: {
                    dimensions: [
                      {
                        field: 't',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'channel',
                        type: 'nominal',
                        values: [
                          'c01 DAPI',
                          'c01 Alexa 488',
                          'c01 Atto 425',
                          'c01 Alexa 568',
                          'c01 Alexa 647',
                          'c02 DAPI',
                          'c02 Alexa 488',
                          'c02 Atto 425',
                          'c02 Alexa 568',
                          'c02 Alexa 647',
                          'c03 DAPI',
                          'c03 Alexa 488',
                          'c03 Atto 425',
                          'c03 Alexa 568',
                          'c03 Alexa 647',
                          'c04 DAPI',
                          'c04 Alexa 488',
                          'c04 Atto 425',
                          'c04 Alexa 568',
                          'c04 Alexa 647',
                          'c05 DAPI',
                          'c05 Alexa 488',
                          'c05 Atto 425',
                          'c05 Alexa 568',
                          'c05 Alexa 647',
                          'c06 DAPI',
                          'c06 Alexa 488',
                          'c06 Atto 425',
                          'c06 Alexa 568',
                          'c06 Alexa 647',
                          'c07 DAPI',
                          'c07 Alexa 488',
                          'c07 Atto 425',
                          'c07 Alexa 568',
                          'c07 Alexa 647',
                        ],
                      },
                      {
                        field: 'y',
                        type: 'quantitative',
                        values: null,
                      },
                      {
                        field: 'x',
                        type: 'quantitative',
                        values: null,
                      },
                    ],
                    isPyramid: true,
                    transform: {
                      translate: {
                        y: 0,
                        x: 0,
                      },
                      scale: 1,
                    },
                  },
                },
                ]
              },
            },
            {
              url: 'https://storage.googleapis.com/webatlas-vitessce-data/zarr/iss/iss_full_chunks.zarr',
              type: 'cells',
              fileType: 'anndata-cells.zarr',
              options: {
                xy: 'obsm/spatial',
                mappings: {
                  PCA: {
                    key: 'obsm/X_pca',
                    dims: [0, 1],
                  },
                  UMAP: {
                    key: 'obsm/X_umap',
                    dims: [0, 1],
                  },
                },
                factors: [
                  'obs/sample',
                  'obs/total_counts',
                ],
              },
            },
            {
              url: 'https://storage.googleapis.com/webatlas-vitessce-data/zarr/iss/iss_full_chunks.zarr',
              type: 'cell-sets',
              fileType: 'anndata-cell-sets.zarr',
              options: [
                {
                  groupName: 'sample',
                  setName: 'obs/sample',
                },
                {
                  groupName: 'total_counts',
                  setName: 'obs/total_counts',
                },
              ],
            },
            {
              url: 'https://storage.googleapis.com/webatlas-vitessce-data/zarr/iss/iss_full_chunks.zarr',
              type: 'expression-matrix',
              fileType: 'anndata-expression-matrix.zarr',
              options: {
                matrix: 'X',
              },
            },
          ],
        },
      ],
      initStrategy: 'auto',
      coordinationSpace: {
        embeddingType: {
          PCA: 'PCA',
          UMAP: 'UMAP',
        },
        embeddingZoom: {
          PCA: 0,
          UMAP: 0.75,
        },
        spatialZoom: {
          A: -5.5,
        },
        spatialTargetX: {
          A: 16000,
        },
        spatialTargetY: {
          A: 20000,
        },
      },
      layout: [
          {
            component: 'description',
            x: 0,
            y: 0,
            w: 2,
            h: 2,
          },
          {
            component: 'layerController',
            x: 0,
            y: 2,
            w: 2,
            h: 8,
          },
          {
            component: 'status',
            x: 0,
            y: 9,
            w: 2,
            h: 2,
          },
          {
            component: 'spatial',
            x: 2,
            y: 0,
            w: 4,
            h: 8,
          },
          {
            component: 'scatterplot',
            x: 6,
            y: 0,
            w: 3,
            h: 4,
            coordinationScopes:{
              embeddingType: 'PCA',
              embeddingZoom: 'PCA',
            },
          },
          {
            component: 'scatterplot',
            x: 6,
            y: 4,
            w: 3,
            h: 4,
            coordinationScopes:{
              embeddingType: 'UMAP',
              embeddingZoom: 'UMAP',
            },
          },
          {
            component: 'genes',
            x: 9,
            y: 0,
            w: 3,
            h: 4,
          },
          {
            component: 'cellSets',
            x: 9,
            y: 4,
            w: 3,
            h: 4,
          },
          {
            component: 'heatmap',
            x: 2,
            y: 8,
            w: 5,
            h: 4,
            props: {
              transpose: true,
            },
          },
          {
            component: 'cellSetExpression',
            x: 7,
            y: 8,
            w: 3,
            h: 4,
          },
          {
            component: 'expressionHistogram',
            x: 10,
            y: 8,
            w: 2,
            h: 4,
          },
      ],
  },
};
/* eslint-enable */

export function listConfigs(showAll) {
  return Object.entries(configs).filter(
    entry => showAll || entry[1].public,
  ).map(
    ([id, config]) => ({
      id,
      name: config.name,
      description: config.description,
    }),
  );
}

export function getConfig(id) {
  return configs[id];
}
