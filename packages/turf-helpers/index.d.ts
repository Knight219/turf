/// <reference types='geojson' />

// GeoJSON Foreign Members
export type Id = string | number;
export type Properties = object;
export type BBox = [number, number, number, number];

// TurfJS Combined Types
export type Coord = Feature<Point> | Point | Position;

// TurfJS String Types
export type Units = 'miles' | 'nauticalmiles' | 'degrees' | 'radians' | 'inches' | 'yards' | 'meters' | 'metres' | 'kilometers' | 'kilometres';
export type Geometry = 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon';
export type Grid = 'point' | 'square' | 'hex' | 'triangle';
export type Collection = 'FeatureCollection' | 'GeometryCollection';
export type Types = 'Feature' | Geometry | Collection;
export type Corners = 'sw' | 'se' | 'nw' | 'ne' | 'center' | 'centroid';


// GeoJSON Geometry Types
export type Position = GeoJSON.Position;
export type Point = GeoJSON.Point;
export type MultiPoint = GeoJSON.MultiPoint;
export type MultiLineString = GeoJSON.MultiLineString;
export type LineString = GeoJSON.LineString;
export type Polygon = GeoJSON.Polygon;
export type MultiPolygon = GeoJSON.MultiPolygon;
export type Geometries = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon;
export type GeometryObject = GeoJSON.GeometryObject;
export type GeometryCollection = GeoJSON.GeometryCollection;

// GeoJSON Feature Objects
export type FeatureCollection<T extends GeometryObject> = GeoJSON.FeatureCollection<T>;
export type Feature<T extends GeometryObject> = GeoJSON.Feature<T>;
export interface FeatureGeometryCollection extends Feature<any> {
    geometry: GeometryCollection;
}
export interface ExtendedFeatureCollection<Feat extends Feature<any>> {
    type: 'FeatureCollection';
    features: Feat[];
}
export type AllGeoJSON = Feature<any> | FeatureCollection<any> | FeatureGeometryCollection | GeometryObject | GeometryCollection;

interface FeatureOptions {
    id?: Id;
    bbox?: BBox;
}

interface GeometryOptions {
    bbox?: BBox;
}

/**
 * http://turfjs.org/docs/#feature
 */
export function feature<T extends GeometryObject>(geometry: T, properties?: Properties, options?: FeatureOptions): Feature<T>;

/**
 * http://turfjs.org/docs/#featurecollection
 */
export function featureCollection<Geom extends GeometryObject>(features: Feature<Geom>[], options?: FeatureOptions): FeatureCollection<Geom>;
export function featureCollection(features: Feature<any>[], options?: FeatureOptions): FeatureCollection<any>;

/**
 * http://turfjs.org/docs/#geometry
 */
export function geometry(type: 'Point', coordinates: Position, options?: GeometryOptions): Point;
export function geometry(type: 'LineString', coordinates: Position[], options?: GeometryOptions): LineString;
export function geometry(type: 'Polygon', coordinates: Position[][], options?: GeometryOptions): Polygon;
export function geometry(type: 'MultiPoint', coordinates: Position[], options?: GeometryOptions): MultiPoint;
export function geometry(type: 'MultiLineString', coordinates: Position[][], options?: GeometryOptions): MultiLineString;
export function geometry(type: 'MultiPolygon', coordinates: Position[][][], options?: GeometryOptions): MultiPolygon;
export function geometry(type: Geometry | string, coordinates: any[], options?: GeometryOptions): GeometryObject;

/**
 * http://turfjs.org/docs/#point
 */
export function point(coordinates: Position, properties?: Properties, options?: FeatureOptions): Feature<Point>;

/**
 * http://turfjs.org/docs/#points
 */
export function points(coordinates: Position[], properties?: Properties, options?: FeatureOptions): FeatureCollection<Point>;

/**
 * http://turfjs.org/docs/#polygon
 */
export function polygon(coordinates: Position[][], properties?: Properties, options?: FeatureOptions): Feature<Polygon>;

/**
 * http://turfjs.org/docs/#polygons
 */
export function polygons(coordinates: Position[][][], properties?: Properties, options?: FeatureOptions): FeatureCollection<Polygon>;

/**
 * http://turfjs.org/docs/#linestring
 */
export function lineString(coordinates: Position[], properties?: Properties, options?: FeatureOptions): Feature<LineString>;

/**
 * http://turfjs.org/docs/#linestrings
 */
export function lineStrings(coordinates: Position[][], properties?: Properties, options?: FeatureOptions): FeatureCollection<LineString>;


/**
 * http://turfjs.org/docs/#multilinestring
 */
export function multiLineString(coordinates: Position[][], properties?: Properties, options?: FeatureOptions): Feature<MultiLineString>;

/**
 * http://turfjs.org/docs/#multipoint
 */
export function multiPoint(coordinates: Position[], properties?: Properties, options?: FeatureOptions): Feature<MultiPoint>;

/**
 * http://turfjs.org/docs/#multipolygon
 */
export function multiPolygon(coordinates: Position[][][], properties?: Properties, options?: FeatureOptions): Feature<MultiPolygon>;

/**
 * http://turfjs.org/docs/#geometrycollection
 */
export function geometryCollection(geometries: GeometryObject[], properties?: Properties, options?: FeatureOptions): FeatureGeometryCollection;

/**
 * http://turfjs.org/docs/#radianstolength
 */
export function radiansToLength(radians: number, units?: Units): number

/**
 * http://turfjs.org/docs/#lengthtoradians
 */
export function lengthToRadians(distance: number, units?: Units): number

/**
 * http://turfjs.org/docs/#lengthtodegrees
 */
export function lengthToDegrees(distance: number, units?: Units): number

/**
 * http://turfjs.org/docs/#bearingtoazimuth
 */
export function bearingToAzimuth(bearing: number): number

/**
 * http://turfjs.org/docs/#radianstodegrees
 */
export function radiansToDegrees(radians: number): number

/**
 * http://turfjs.org/docs/#degreestoradians
 */
export function degreesToRadians(degrees: number): number

/**
 * http://turfjs.org/docs/#round
 */
export function round(num: number, precision?: number): number

/**
 * http://turfjs.org/docs/#convertlength
 */
export function convertLength(length: number, originalUnit: Units, finalUnit?: Units): number

/**
 * http://turfjs.org/docs/#convertarea
 */
export function convertArea(area: number, originalUnit?: Units, finalUnit?: Units): number

/**
 * http://turfjs.org/docs/#isnumber
 */
export function isNumber(num: any): boolean

/**
 * http://turfjs.org/docs/#isobject
 */
export function isObject(input: any): boolean

/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 */
export const earthRadius: number;

/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 */
export const factors: {
    meters: number
    millimeters: number
    centimeters: number
    kilometers: number
    miles: number
    nauticalmiles: number
    inches: number
    yards: number
    feet: number
}

/**
 * Units of measurement factors based on 1 meter.
 */
export const unitsFactors: {
    meters: number
    millimeters: number
    centimeters: number
    kilometers: number
    miles: number
    nauticalmiles: number
    inches: number
    yards: number
    feet: number
    radians: number
    degrees: number
};

/**
 * Area of measurement factors based on 1 square meter.
 */
export const areaFactors: {
    meters: number
    millimeters: number
    centimeters: number
    kilometers: number
    acres: number
    miles: number
    yards: number
    feet: number
    inches: number
};

/**
 * Validate Id
 */
export function validateId(id: Id): void;

/**
 * Validate BBox
 */
export function validateBBox(bbox: BBox): void;
