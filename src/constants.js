/**
 * Constants module
 * @module constants
 * @see module:functions
 */

/**
 * A score lower than this is considered a good email
 * @constant {number}
 */
export const DEFAULT_SCORE_LOWER_BOUNDS = 0.1

/**
 * A score higher than this is considered a bad email
 * @constant {number}
 */
export const DEFAULT_SCORE_UPPER_BOUNDS = 0.9

// /**
//  * Minimum score for SCORE_INTERPOLATION
//  * @constant {number} Minimum score seen from the first Score Domain that was made for (Rspamd score)
//  * @see module:functions.scoreInterpolation
//  */
// export const MIN_SCORE_SEEN = -40

// /**
//  * Maximum score for SCORE_INTERPOLATION
//  * @constant {number} Maximum score seen from the first Score Domain that was made for (Rspamd score)
//  * @see module:functions.scoreInterpolation
//  */
// export const MAX_SCORE_SEEN = 40

// /**
//  * @constant {Object<string, interpolationBounds>}
//  * @type {Object<string, interpolationBounds>}
//  */
// export const SCORE_INTERPOLATION = {
//   'x-vr-spamscore': { MIN_VALUE: 0, MAX_VALUE: 900, LOWER_BOUNDS: 100, UPPER_BOUNDS: 300 }
// }

/**
 * @constant {Object<RegExp>}
 */
export const SCORE_REGEX = {
  'x-bogosity': /(?:Ham|Spam|Unsure), tests=bogofilter, spamicity=([-+]?[0-9]+\.?[0-9]*), version=(?:[.0-9]+)/
}

/**
 * For customised headers
 * @constant {Object<RegExp>}
 */
export const CUSTOM_SCORE_REGEX = {
}

/** @constant {RegExp} */
export const SPAM_HEADER_REGEX =
  /(X-.*?(?:X-Bogosity):.*(?:\r?\n(?:\t+ *| +).*)*)/g

/**
 * Headers that contain the score details
 * @constant {String[]}
 */
export const SCORE_DETAILS_ARRAY = [
  'x-bogosity'
]

/** @constant {Object<RegExp>} */
export const SYMBOL_REGEX = {
  prefix: /\*? +-?[\d.]+[ \)=]+(?:[A-Z][A-Z0-9_]+|--) .*?(?=\*? +-?[\d.]+[ \)=]+(?:[A-Z][A-Z0-9_]+|--) |$)/gs,
  prefixSingle: /(?:\* +)?(-?[\d.]+)[ \)=]+(?:([A-Z][A-Z0-9_]+)|--) ([\s\S]*?)(?:\[(.*)\])?$/,
  suffix: /([A-Z][A-Z0-9_]+)(?:(?:[ \(=](-?[\d.]+)\)?(?:\[(.*?)\])?)|, *| |\r?\n|$)/g
}
