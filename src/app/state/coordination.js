/**
 * Constants representing names of coordination types,
 * to help prevent typos.
 */
export const COORDINATION_TYPES = {
  DATASET: 'dataset',
  EMBEDDING_TYPE: 'embeddingType',
  EMBEDDING_ZOOM: 'embeddingZoom',
  EMBEDDING_ROTATION: 'embeddingRotation',
  EMBEDDING_TARGET_X: 'embeddingTargetX',
  EMBEDDING_TARGET_Y: 'embeddingTargetY',
  EMBEDDING_TARGET_Z: 'embeddingTargetZ',
  EMBEDDING_CELL_SET_POLYGONS_VISIBLE: 'embeddingCellSetPolygonsVisible',
  EMBEDDING_CELL_SET_LABELS_VISIBLE: 'embeddingCellSetLabelsVisible',
  EMBEDDING_CELL_SET_LABEL_SIZE: 'embeddingCellSetLabelSize',
  EMBEDDING_CELL_RADIUS: 'embeddingCellRadius',
  SPATIAL_ZOOM: 'spatialZoom',
  SPATIAL_ROTATION: 'spatialRotation',
  SPATIAL_TARGET_X: 'spatialTargetX',
  SPATIAL_TARGET_Y: 'spatialTargetY',
  SPATIAL_TARGET_Z: 'spatialTargetZ',
  SPATIAL_ROTATION_X: 'spatialRotationX',
  SPATIAL_ROTATION_Y: 'spatialRotationY',
  SPATIAL_ROTATION_Z: 'spatialRotationZ',
  SPATIAL_ROTATION_ORBIT: 'spatialRotationOrbit',
  SPATIAL_ORBIT_AXIS: 'spatialOrbitAxis',
  SPATIAL_AXIS_FIXED: 'spatialAxisFixed',
  HEATMAP_ZOOM_X: 'heatmapZoomX',
  HEATMAP_ZOOM_Y: 'heatmapZoomY',
  HEATMAP_TARGET_X: 'heatmapTargetX',
  HEATMAP_TARGET_Y: 'heatmapTargetY',
  CELL_FILTER: 'cellFilter',
  CELL_HIGHLIGHT: 'cellHighlight',
  CELL_SET_SELECTION: 'cellSetSelection',
  CELL_SET_HIGHLIGHT: 'cellSetHighlight',
  CELL_SET_COLOR: 'cellSetColor',
  GENE_FILTER: 'geneFilter',
  GENE_HIGHLIGHT: 'geneHighlight',
  GENE_SELECTION: 'geneSelection',
  GENE_EXPRESSION_COLORMAP: 'geneExpressionColormap',
  GENE_EXPRESSION_TRANSFORM: 'geneExpressionTransform',
  GENE_EXPRESSION_COLORMAP_RANGE: 'geneExpressionColormapRange',
  CELL_COLOR_ENCODING: 'cellColorEncoding',
  SPATIAL_RASTER_LAYERS: 'spatialRasterLayers',
  SPATIAL_CELLS_LAYER: 'spatialCellsLayer',
  SPATIAL_MOLECULES_LAYER: 'spatialMoleculesLayer',
  SPATIAL_NEIGHBORHOODS_LAYER: 'spatialNeighborhoodsLayer',
  GENOMIC_ZOOM_X: 'genomicZoomX',
  GENOMIC_ZOOM_Y: 'genomicZoomY',
  GENOMIC_TARGET_X: 'genomicTargetX',
  GENOMIC_TARGET_Y: 'genomicTargetY',
  ADDITIONAL_CELL_SETS: 'additionalCellSets',
  MOLECULE_HIGHLIGHT: 'moleculeHighlight',
};

/**
 * Coordination types may have default values,
 * which can be defined here, and used by the
 * auto initialization strategy.
 */
export const DEFAULT_COORDINATION_VALUES = {
  [COORDINATION_TYPES.EMBEDDING_ZOOM]: null,
  [COORDINATION_TYPES.EMBEDDING_ROTATION]: 0,
  [COORDINATION_TYPES.EMBEDDING_TARGET_X]: null,
  [COORDINATION_TYPES.EMBEDDING_TARGET_Y]: null,
  [COORDINATION_TYPES.EMBEDDING_TARGET_Z]: 0,
  [COORDINATION_TYPES.EMBEDDING_CELL_SET_POLYGONS_VISIBLE]: false,
  [COORDINATION_TYPES.EMBEDDING_CELL_SET_LABELS_VISIBLE]: false,
  [COORDINATION_TYPES.EMBEDDING_CELL_SET_LABEL_SIZE]: 14,
  [COORDINATION_TYPES.EMBEDDING_CELL_RADIUS]: 1,
  [COORDINATION_TYPES.SPATIAL_ZOOM]: null,
  [COORDINATION_TYPES.SPATIAL_ROTATION]: 0,
  [COORDINATION_TYPES.SPATIAL_TARGET_X]: null,
  [COORDINATION_TYPES.SPATIAL_TARGET_Y]: null,
  [COORDINATION_TYPES.SPATIAL_TARGET_Z]: null,
  [COORDINATION_TYPES.SPATIAL_ROTATION_X]: null,
  [COORDINATION_TYPES.SPATIAL_ROTATION_Y]: null,
  [COORDINATION_TYPES.SPATIAL_ROTATION_Z]: null,
  [COORDINATION_TYPES.SPATIAL_AXIS_FIXED]: false,
  [COORDINATION_TYPES.SPATIAL_ROTATION_ORBIT]: 0,
  [COORDINATION_TYPES.SPATIAL_ORBIT_AXIS]: 'Y',
  [COORDINATION_TYPES.SPATIAL_RASTER_LAYERS]: null,
  [COORDINATION_TYPES.SPATIAL_CELLS_LAYER]: null,
  [COORDINATION_TYPES.SPATIAL_MOLECULES_LAYER]: null,
  [COORDINATION_TYPES.SPATIAL_NEIGHBORHOODS_LAYER]: null,
  [COORDINATION_TYPES.HEATMAP_ZOOM_X]: 0,
  [COORDINATION_TYPES.HEATMAP_ZOOM_Y]: 0,
  [COORDINATION_TYPES.HEATMAP_TARGET_X]: 0,
  [COORDINATION_TYPES.HEATMAP_TARGET_Y]: 0,
  [COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP]: 'plasma',
  [COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP_RANGE]: [0.0, 1.0],
  [COORDINATION_TYPES.GENE_EXPRESSION_TRANSFORM]: null,
  [COORDINATION_TYPES.GENE_FILTER]: null,
  [COORDINATION_TYPES.GENE_HIGHLIGHT]: null,
  [COORDINATION_TYPES.GENE_SELECTION]: null,
  [COORDINATION_TYPES.CELL_FILTER]: null,
  [COORDINATION_TYPES.CELL_HIGHLIGHT]: null,
  [COORDINATION_TYPES.CELL_SET_SELECTION]: null,
  [COORDINATION_TYPES.CELL_SET_HIGHLIGHT]: null,
  [COORDINATION_TYPES.CELL_SET_COLOR]: null,
  [COORDINATION_TYPES.CELL_COLOR_ENCODING]: 'cellSetSelection',
  [COORDINATION_TYPES.GENOMIC_ZOOM_X]: 0,
  [COORDINATION_TYPES.GENOMIC_ZOOM_Y]: 0,
  [COORDINATION_TYPES.GENOMIC_TARGET_X]: 1549999999.5,
  [COORDINATION_TYPES.GENOMIC_TARGET_Y]: 1549999999.5,
  [COORDINATION_TYPES.ADDITIONAL_CELL_SETS]: null,
  [COORDINATION_TYPES.MOLECULE_HIGHLIGHT]: null,
};

// The following coordination types should be
// initialized to independent scopes when
// initialized automatically.
// These make the resulting view config
// (after auto-initialization) behave
// like "legacy" Vitessce (pre-coordination model).
export const AUTO_INDEPENDENT_COORDINATION_TYPES = [
  COORDINATION_TYPES.HEATMAP_ZOOM_X,
  COORDINATION_TYPES.HEATMAP_ZOOM_Y,
  COORDINATION_TYPES.HEATMAP_TARGET_X,
  COORDINATION_TYPES.HEATMAP_TARGET_Y,
  COORDINATION_TYPES.EMBEDDING_ZOOM,
  COORDINATION_TYPES.EMBEDDING_TARGET_X,
  COORDINATION_TYPES.EMBEDDING_TARGET_Y,
  COORDINATION_TYPES.EMBEDDING_TARGET_Z,
  COORDINATION_TYPES.EMBEDDING_CELL_SET_POLYGONS_VISIBLE,
  COORDINATION_TYPES.EMBEDDING_CELL_SET_LABELS_VISIBLE,
  COORDINATION_TYPES.EMBEDDING_CELL_SET_LABEL_SIZE,
  COORDINATION_TYPES.EMBEDDING_CELL_RADIUS,
];

/**
   * Mapping from component type to
   * supported coordination object types.
   * This mapping can be used to determine
   * which pieces of state that a component will
   * need to get/set.
   * Keys here are the component registry keys.
   */
export const COMPONENT_COORDINATION_TYPES = {
  scatterplot: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.EMBEDDING_TYPE,
    COORDINATION_TYPES.EMBEDDING_ZOOM,
    COORDINATION_TYPES.EMBEDDING_ROTATION,
    COORDINATION_TYPES.EMBEDDING_TARGET_X,
    COORDINATION_TYPES.EMBEDDING_TARGET_Y,
    COORDINATION_TYPES.EMBEDDING_TARGET_Z,
    COORDINATION_TYPES.EMBEDDING_CELL_SET_POLYGONS_VISIBLE,
    COORDINATION_TYPES.EMBEDDING_CELL_SET_LABELS_VISIBLE,
    COORDINATION_TYPES.EMBEDDING_CELL_SET_LABEL_SIZE,
    COORDINATION_TYPES.EMBEDDING_CELL_RADIUS,
    COORDINATION_TYPES.CELL_FILTER,
    COORDINATION_TYPES.CELL_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_SELECTION,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_COLOR,
    COORDINATION_TYPES.GENE_HIGHLIGHT,
    COORDINATION_TYPES.GENE_SELECTION,
    COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP,
    COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP_RANGE,
    COORDINATION_TYPES.CELL_COLOR_ENCODING,
    COORDINATION_TYPES.ADDITIONAL_CELL_SETS,
  ],
  spatial: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.SPATIAL_ZOOM,
    COORDINATION_TYPES.SPATIAL_ROTATION,
    COORDINATION_TYPES.SPATIAL_RASTER_LAYERS,
    COORDINATION_TYPES.SPATIAL_CELLS_LAYER,
    COORDINATION_TYPES.SPATIAL_MOLECULES_LAYER,
    COORDINATION_TYPES.SPATIAL_NEIGHBORHOODS_LAYER,
    COORDINATION_TYPES.SPATIAL_TARGET_X,
    COORDINATION_TYPES.SPATIAL_TARGET_Y,
    COORDINATION_TYPES.SPATIAL_TARGET_Z,
    COORDINATION_TYPES.SPATIAL_ROTATION_X,
    COORDINATION_TYPES.SPATIAL_ROTATION_Y,
    COORDINATION_TYPES.SPATIAL_ROTATION_Z,
    COORDINATION_TYPES.SPATIAL_ROTATION_ORBIT,
    COORDINATION_TYPES.SPATIAL_ORBIT_AXIS,
    COORDINATION_TYPES.SPATIAL_AXIS_FIXED,
    COORDINATION_TYPES.CELL_FILTER,
    COORDINATION_TYPES.CELL_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_SELECTION,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_COLOR,
    COORDINATION_TYPES.GENE_HIGHLIGHT,
    COORDINATION_TYPES.GENE_SELECTION,
    COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP,
    COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP_RANGE,
    COORDINATION_TYPES.CELL_COLOR_ENCODING,
    COORDINATION_TYPES.ADDITIONAL_CELL_SETS,
    COORDINATION_TYPES.MOLECULE_HIGHLIGHT,
  ],
  heatmap: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.HEATMAP_ZOOM_X,
    COORDINATION_TYPES.HEATMAP_ZOOM_Y,
    COORDINATION_TYPES.HEATMAP_TARGET_X,
    COORDINATION_TYPES.HEATMAP_TARGET_Y,
    COORDINATION_TYPES.CELL_FILTER,
    COORDINATION_TYPES.CELL_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_SELECTION,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_COLOR,
    COORDINATION_TYPES.GENE_FILTER,
    COORDINATION_TYPES.GENE_HIGHLIGHT,
    COORDINATION_TYPES.GENE_SELECTION,
    COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP,
    COORDINATION_TYPES.GENE_EXPRESSION_COLORMAP_RANGE,
    COORDINATION_TYPES.CELL_COLOR_ENCODING,
    COORDINATION_TYPES.ADDITIONAL_CELL_SETS,
  ],
  cellSets: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.CELL_SET_SELECTION,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_COLOR,
    COORDINATION_TYPES.CELL_COLOR_ENCODING,
    COORDINATION_TYPES.ADDITIONAL_CELL_SETS,
  ],
  cellSetSizes: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.CELL_SET_SELECTION,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_COLOR,
    COORDINATION_TYPES.ADDITIONAL_CELL_SETS,
  ],
  cellSetExpression: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.GENE_SELECTION,
    COORDINATION_TYPES.GENE_EXPRESSION_TRANSFORM,
    COORDINATION_TYPES.CELL_SET_SELECTION,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_COLOR,
    COORDINATION_TYPES.ADDITIONAL_CELL_SETS,
  ],
  status: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.CELL_HIGHLIGHT,
    COORDINATION_TYPES.GENE_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.MOLECULE_HIGHLIGHT,
  ],
  genes: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.GENE_FILTER,
    COORDINATION_TYPES.GENE_HIGHLIGHT,
    COORDINATION_TYPES.GENE_SELECTION,
    COORDINATION_TYPES.CELL_COLOR_ENCODING,
  ],
  expressionHistogram: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.GENE_SELECTION,
  ],
  layerController: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.SPATIAL_RASTER_LAYERS,
    COORDINATION_TYPES.SPATIAL_CELLS_LAYER,
    COORDINATION_TYPES.SPATIAL_MOLECULES_LAYER,
    COORDINATION_TYPES.SPATIAL_NEIGHBORHOODS_LAYER,
    COORDINATION_TYPES.SPATIAL_ZOOM,
    COORDINATION_TYPES.SPATIAL_TARGET_X,
    COORDINATION_TYPES.SPATIAL_TARGET_Y,
    COORDINATION_TYPES.SPATIAL_TARGET_Z,
    COORDINATION_TYPES.SPATIAL_ROTATION_X,
    COORDINATION_TYPES.SPATIAL_ROTATION_Y,
    COORDINATION_TYPES.SPATIAL_ROTATION_Z,
    COORDINATION_TYPES.SPATIAL_ROTATION_ORBIT,
    COORDINATION_TYPES.SPATIAL_ORBIT_AXIS,
  ],
  higlass: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.GENOMIC_ZOOM_X,
    COORDINATION_TYPES.GENOMIC_ZOOM_Y,
    COORDINATION_TYPES.GENOMIC_TARGET_X,
    COORDINATION_TYPES.GENOMIC_TARGET_Y,
    COORDINATION_TYPES.GENE_FILTER,
    COORDINATION_TYPES.GENE_HIGHLIGHT,
    COORDINATION_TYPES.GENE_SELECTION,
  ],
  genomicProfiles: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.GENOMIC_ZOOM_X,
    COORDINATION_TYPES.GENOMIC_ZOOM_Y,
    COORDINATION_TYPES.GENOMIC_TARGET_X,
    COORDINATION_TYPES.GENOMIC_TARGET_Y,
    COORDINATION_TYPES.GENE_FILTER,
    COORDINATION_TYPES.GENE_HIGHLIGHT,
    COORDINATION_TYPES.GENE_SELECTION,
    COORDINATION_TYPES.CELL_SET_SELECTION,
    COORDINATION_TYPES.CELL_SET_HIGHLIGHT,
    COORDINATION_TYPES.CELL_SET_COLOR,
    COORDINATION_TYPES.ADDITIONAL_CELL_SETS,
  ],
  description: [
    COORDINATION_TYPES.DATASET,
    COORDINATION_TYPES.SPATIAL_RASTER_LAYERS,
  ],
};
