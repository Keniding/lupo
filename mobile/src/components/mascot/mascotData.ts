// GENERATED from assets/mascotas/*.svg — do not edit by hand.
// Regenerate with `node scripts/gen-mascot-data.js` if the source art changes.
// Each emotion is a full node tree; the renderer diffs nothing, it just walks
// the tree for the requested emotion and injects animated transforms into the
// parts named in ANIMATED_PARTS (see MascotSvg.tsx).

export type MascotNode = {
  id: string | null;
  kind: 'g' | 'path' | 'circle' | 'ellipse';
  d?: string;
  cx?: number;
  cy?: number;
  r?: number;
  rx?: number;
  ry?: number;
  fill?: string;
  rotate?: { deg: number; x: number; y: number };
  children?: MascotNode[];
};

export type MascotArt = {
  viewBox: { w: number; h: number };
  children: MascotNode[];
};

export const MASCOT_ART = {
  "lupo": {
    "neutral": {
      "viewBox": {
        "w": 260,
        "h": 310
      },
      "children": [
        {
          "id": "gallito",
          "kind": "g",
          "children": [
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 156 200 C 192 204 222 222 234 246 C 220 248 208 244 198 236 C 202 248 202 260 198 272 C 186 262 176 250 170 238 C 166 250 160 256 154 258 Z",
                  "fill": "#FF5A36"
                },
                {
                  "id": "pata_izq",
                  "kind": "path",
                  "d": "M 101 256 L 111 256 L 111 278 C 116 282 122 286 124 290 C 120 293 114 290 106 284 C 98 290 92 293 88 290 C 90 286 96 282 101 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "pata_der",
                  "kind": "path",
                  "d": "M 133 256 L 143 256 L 143 278 C 148 282 154 286 156 290 C 152 293 146 290 138 284 C 130 290 124 293 120 290 C 122 286 128 282 133 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 148 C 96 148 74 170 68 200 C 62 236 84 270 120 270 C 156 270 178 236 172 200 C 166 170 144 148 120 148 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "ala_izq",
                  "kind": "path",
                  "d": "M 94 158 C 62 168 48 202 52 232 C 54 250 74 254 82 238 C 94 214 100 180 94 158 Z",
                  "fill": "#5BC0BE"
                },
                {
                  "id": "ala_der",
                  "kind": "path",
                  "d": "M 146 158 C 178 168 192 202 188 232 C 186 250 166 254 158 238 C 146 214 140 180 146 158 Z",
                  "fill": "#5BC0BE"
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "children": [
                {
                  "id": "cresta",
                  "kind": "g",
                  "fill": "#FF5A36",
                  "children": [
                    {
                      "id": "petalo_izq",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": -26,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_centro",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": -3,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_der",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": 19,
                        "x": 120,
                        "y": 54
                      }
                    }
                  ]
                },
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 100,
                  "r": 58,
                  "fill": "#FF5A36"
                },
                {
                  "id": "blanco_izq",
                  "kind": "circle",
                  "cx": 100,
                  "cy": 98,
                  "r": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "blanco_der",
                  "kind": "circle",
                  "cx": 140,
                  "cy": 98,
                  "r": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "pupila_izq",
                  "kind": "circle",
                  "cx": 100,
                  "cy": 98,
                  "r": 9,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "pupila_der",
                  "kind": "circle",
                  "cx": 140,
                  "cy": 98,
                  "r": 9,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 82 76 C 94 66 108 66 118 72 L 116 79 C 106 74 94 75 84 83 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 158 76 C 146 66 132 66 122 72 L 124 79 C 134 74 146 75 156 83 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "pico",
                  "kind": "path",
                  "d": "M 107 116 L 133 116 L 120 135 Z",
                  "fill": "#FFC845"
                }
              ]
            }
          ]
        }
      ]
    },
    "acierto": {
      "viewBox": {
        "w": 260,
        "h": 310
      },
      "children": [
        {
          "id": "gallito",
          "kind": "g",
          "children": [
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 156 200 C 192 204 222 222 234 246 C 220 248 208 244 198 236 C 202 248 202 260 198 272 C 186 262 176 250 170 238 C 166 250 160 256 154 258 Z",
                  "fill": "#FF5A36",
                  "rotate": {
                    "deg": -10,
                    "x": 156,
                    "y": 230
                  }
                },
                {
                  "id": "pata_izq",
                  "kind": "path",
                  "d": "M 101 256 L 111 256 L 111 278 C 116 282 122 286 124 290 C 120 293 114 290 106 284 C 98 290 92 293 88 290 C 90 286 96 282 101 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "pata_der",
                  "kind": "path",
                  "d": "M 133 256 L 143 256 L 143 278 C 148 282 154 286 156 290 C 152 293 146 290 138 284 C 130 290 124 293 120 290 C 122 286 128 282 133 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 148 C 96 148 74 170 68 200 C 62 236 84 270 120 270 C 156 270 178 236 172 200 C 166 170 144 148 120 148 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "ala_izq",
                  "kind": "path",
                  "d": "M 94 158 C 62 168 48 202 52 232 C 54 250 74 254 82 238 C 94 214 100 180 94 158 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": -16,
                    "x": 94,
                    "y": 158
                  }
                },
                {
                  "id": "ala_der",
                  "kind": "path",
                  "d": "M 146 158 C 178 168 192 202 188 232 C 186 250 166 254 158 238 C 146 214 140 180 146 158 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": 16,
                    "x": 146,
                    "y": 158
                  }
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "rotate": {
                "deg": -6,
                "x": 120,
                "y": 100
              },
              "children": [
                {
                  "id": "cresta",
                  "kind": "g",
                  "fill": "#FF5A36",
                  "children": [
                    {
                      "id": "petalo_izq",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": -34,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_centro",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": -10,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_der",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": 12,
                        "x": 120,
                        "y": 54
                      }
                    }
                  ]
                },
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 100,
                  "r": 58,
                  "fill": "#FF5A36"
                },
                {
                  "id": "ojo_izq",
                  "kind": "path",
                  "d": "M 85 103 C 90 87 110 87 115 103 L 107 104 C 103 95 97 95 93 104 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ojo_der",
                  "kind": "path",
                  "d": "M 125 103 C 130 87 150 87 155 103 L 147 104 C 143 95 137 95 133 104 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 82 68 C 94 56 108 56 118 63 L 116 70 C 106 64 94 65 84 75 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 158 68 C 146 56 132 56 122 63 L 124 70 C 134 64 146 65 156 75 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "pico_sup",
                  "kind": "path",
                  "d": "M 104 124 L 136 124 L 120 110 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "pico_inf",
                  "kind": "path",
                  "d": "M 104 128 L 136 128 L 120 142 Z",
                  "fill": "#E09A1F"
                }
              ]
            }
          ]
        }
      ]
    },
    "error": {
      "viewBox": {
        "w": 260,
        "h": 310
      },
      "children": [
        {
          "id": "gallito",
          "kind": "g",
          "children": [
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 156 200 C 192 204 222 222 234 246 C 220 248 208 244 198 236 C 202 248 202 260 198 272 C 186 262 176 250 170 238 C 166 250 160 256 154 258 Z",
                  "fill": "#FF5A36",
                  "rotate": {
                    "deg": 8,
                    "x": 156,
                    "y": 230
                  }
                },
                {
                  "id": "pata_izq",
                  "kind": "path",
                  "d": "M 101 256 L 111 256 L 111 278 C 116 282 122 286 124 290 C 120 293 114 290 106 284 C 98 290 92 293 88 290 C 90 286 96 282 101 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "pata_der",
                  "kind": "path",
                  "d": "M 133 256 L 143 256 L 143 278 C 148 282 154 286 156 290 C 152 293 146 290 138 284 C 130 290 124 293 120 290 C 122 286 128 282 133 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 148 C 96 148 74 170 68 200 C 62 236 84 270 120 270 C 156 270 178 236 172 200 C 166 170 144 148 120 148 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "ala_izq",
                  "kind": "path",
                  "d": "M 94 158 C 62 168 48 202 52 232 C 54 250 74 254 82 238 C 94 214 100 180 94 158 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": 9,
                    "x": 94,
                    "y": 158
                  }
                },
                {
                  "id": "ala_der",
                  "kind": "path",
                  "d": "M 146 158 C 178 168 192 202 188 232 C 186 250 166 254 158 238 C 146 214 140 180 146 158 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": -9,
                    "x": 146,
                    "y": 158
                  }
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "rotate": {
                "deg": 7,
                "x": 120,
                "y": 100
              },
              "children": [
                {
                  "id": "cresta",
                  "kind": "g",
                  "fill": "#FF5A36",
                  "children": [
                    {
                      "id": "petalo_izq",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": 4,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_centro",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": 22,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_der",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": 40,
                        "x": 120,
                        "y": 54
                      }
                    }
                  ]
                },
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 100,
                  "r": 58,
                  "fill": "#FF5A36"
                },
                {
                  "id": "blanco_izq",
                  "kind": "circle",
                  "cx": 100,
                  "cy": 99,
                  "r": 19,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "blanco_der",
                  "kind": "circle",
                  "cx": 140,
                  "cy": 99,
                  "r": 19,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "pupila_izq",
                  "kind": "circle",
                  "cx": 100,
                  "cy": 106,
                  "r": 9,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "pupila_der",
                  "kind": "circle",
                  "cx": 140,
                  "cy": 106,
                  "r": 9,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 80 86 C 92 72 106 65 118 63 L 119 70 C 108 73 96 80 84 93 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 160 86 C 148 72 134 65 122 63 L 121 70 C 132 73 144 80 156 93 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "pico",
                  "kind": "path",
                  "d": "M 110 118 L 130 118 L 120 130 Z",
                  "fill": "#FFC845"
                }
              ]
            }
          ]
        }
      ]
    },
    "parcial": {
      "viewBox": {
        "w": 260,
        "h": 310
      },
      "children": [
        {
          "id": "gallito",
          "kind": "g",
          "children": [
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 156 200 C 192 204 222 222 234 246 C 220 248 208 244 198 236 C 202 248 202 260 198 272 C 186 262 176 250 170 238 C 166 250 160 256 154 258 Z",
                  "fill": "#FF5A36"
                },
                {
                  "id": "pata_izq",
                  "kind": "path",
                  "d": "M 101 256 L 111 256 L 111 278 C 116 282 122 286 124 290 C 120 293 114 290 106 284 C 98 290 92 293 88 290 C 90 286 96 282 101 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "pata_der",
                  "kind": "path",
                  "d": "M 133 256 L 143 256 L 143 278 C 148 282 154 286 156 290 C 152 293 146 290 138 284 C 130 290 124 293 120 290 C 122 286 128 282 133 278 Z",
                  "fill": "#FFC845"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 148 C 96 148 74 170 68 200 C 62 236 84 270 120 270 C 156 270 178 236 172 200 C 166 170 144 148 120 148 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "ala_izq",
                  "kind": "path",
                  "d": "M 94 158 C 62 168 48 202 52 232 C 54 250 74 254 82 238 C 94 214 100 180 94 158 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": -22,
                    "x": 94,
                    "y": 158
                  }
                },
                {
                  "id": "ala_der",
                  "kind": "path",
                  "d": "M 146 158 C 178 168 192 202 188 232 C 186 250 166 254 158 238 C 146 214 140 180 146 158 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": 4,
                    "x": 146,
                    "y": 158
                  }
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "rotate": {
                "deg": -14,
                "x": 120,
                "y": 100
              },
              "children": [
                {
                  "id": "cresta",
                  "kind": "g",
                  "fill": "#FF5A36",
                  "children": [
                    {
                      "id": "petalo_izq",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": -14,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_centro",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": 8,
                        "x": 120,
                        "y": 54
                      }
                    },
                    {
                      "id": "petalo_der",
                      "kind": "path",
                      "d": "M 113 54 C 109 34 112 15 120 11 C 128 15 131 34 127 54 Z",
                      "rotate": {
                        "deg": 32,
                        "x": 120,
                        "y": 54
                      }
                    }
                  ]
                },
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 100,
                  "r": 58,
                  "fill": "#FF5A36"
                },
                {
                  "id": "blanco_izq",
                  "kind": "circle",
                  "cx": 99,
                  "cy": 97,
                  "r": 19,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "blanco_der",
                  "kind": "ellipse",
                  "cx": 141,
                  "cy": 99,
                  "rx": 14,
                  "ry": 10,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "pupila_izq",
                  "kind": "circle",
                  "cx": 99,
                  "cy": 95,
                  "r": 10,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "pupila_der",
                  "kind": "circle",
                  "cx": 141,
                  "cy": 98,
                  "r": 7,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 80 64 C 92 52 108 54 118 62 L 116 69 C 106 62 94 62 82 71 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 160 84 C 150 74 136 76 126 82 L 128 89 C 136 84 148 83 158 91 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "pico",
                  "kind": "path",
                  "d": "M 109 116 L 131 118 L 118 134 Z",
                  "fill": "#FFC845"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "perro": {
    "neutral": {
      "viewBox": {
        "w": 240,
        "h": 310
      },
      "children": [
        {
          "id": "perro",
          "kind": "g",
          "children": [
            {
              "id": "orejas",
              "kind": "g",
              "fill": "#FF5A36",
              "children": [
                {
                  "id": "oreja_izq",
                  "kind": "path",
                  "d": "M 78 78 C 46 76 26 106 30 148 C 33 182 52 200 70 194 C 82 190 84 170 80 150 C 74 122 74 96 78 78 Z"
                },
                {
                  "id": "oreja_der",
                  "kind": "path",
                  "d": "M 162 78 C 194 76 214 106 210 148 C 207 182 188 200 170 194 C 158 190 156 170 160 150 C 166 122 166 96 162 78 Z"
                }
              ]
            },
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 162 222 C 184 214 200 228 198 246 C 197 256 186 260 180 252 C 176 246 182 240 188 242 C 190 234 180 228 164 234 Z",
                  "fill": "#5BC0BE"
                },
                {
                  "id": "pata_izq",
                  "kind": "ellipse",
                  "cx": 104,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "pata_der",
                  "kind": "ellipse",
                  "cx": 136,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 158 C 96 158 78 180 74 208 C 70 240 90 268 120 268 C 150 268 170 240 166 208 C 162 180 144 158 120 158 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "brazo_izq",
                  "kind": "path",
                  "d": "M 82 186 C 66 190 60 212 66 230 C 70 242 84 242 86 230 C 88 214 86 196 82 186 Z",
                  "fill": "#5BC0BE"
                },
                {
                  "id": "brazo_der",
                  "kind": "path",
                  "d": "M 158 186 C 174 190 180 212 174 230 C 170 242 156 242 154 230 C 152 214 154 196 158 186 Z",
                  "fill": "#5BC0BE"
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "children": [
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 105,
                  "r": 60,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "mancha",
                  "kind": "path",
                  "d": "M 72 78 C 92 66 116 74 120 94 C 122 110 110 126 92 124 C 72 122 62 100 72 78 Z",
                  "fill": "#FF5A36"
                },
                {
                  "id": "ojo_izq",
                  "kind": "circle",
                  "cx": 97,
                  "cy": 102,
                  "r": 11,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ojo_der",
                  "kind": "circle",
                  "cx": 143,
                  "cy": 102,
                  "r": 11,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 82 78 C 90 70 104 70 112 76 L 110 82 C 103 78 92 79 85 85 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 158 78 C 150 70 136 70 128 76 L 130 82 C 137 78 148 79 155 85 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "nariz",
                  "kind": "path",
                  "d": "M 108 118 C 108 113 132 113 132 118 C 132 127 124 133 120 133 C 116 133 108 127 108 118 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "boca",
                  "kind": "path",
                  "d": "M 105 140 C 109 151 118 151 120 142 C 122 151 131 151 135 140 L 130 137 C 127 145 122 145 120 137 C 118 145 113 145 110 137 Z",
                  "fill": "#1B2A4A"
                }
              ]
            }
          ]
        }
      ]
    },
    "acierto": {
      "viewBox": {
        "w": 240,
        "h": 310
      },
      "children": [
        {
          "id": "perro",
          "kind": "g",
          "children": [
            {
              "id": "orejas",
              "kind": "g",
              "fill": "#FF5A36",
              "children": [
                {
                  "id": "oreja_izq",
                  "kind": "path",
                  "d": "M 78 78 C 46 76 26 106 30 148 C 33 182 52 200 70 194 C 82 190 84 170 80 150 C 74 122 74 96 78 78 Z",
                  "rotate": {
                    "deg": -6,
                    "x": 120,
                    "y": 105
                  }
                },
                {
                  "id": "oreja_der",
                  "kind": "path",
                  "d": "M 162 78 C 194 76 214 106 210 148 C 207 182 188 200 170 194 C 158 190 156 170 160 150 C 166 122 166 96 162 78 Z",
                  "rotate": {
                    "deg": -6,
                    "x": 120,
                    "y": 105
                  }
                }
              ]
            },
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 162 222 C 184 214 200 228 198 246 C 197 256 186 260 180 252 C 176 246 182 240 188 242 C 190 234 180 228 164 234 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": -15,
                    "x": 164,
                    "y": 235
                  }
                },
                {
                  "id": "pata_izq",
                  "kind": "ellipse",
                  "cx": 104,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "pata_der",
                  "kind": "ellipse",
                  "cx": 136,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 158 C 96 158 78 180 74 208 C 70 240 90 268 120 268 C 150 268 170 240 166 208 C 162 180 144 158 120 158 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "brazo_izq",
                  "kind": "path",
                  "d": "M 82 186 C 66 190 60 212 66 230 C 70 242 84 242 86 230 C 88 214 86 196 82 186 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": -14,
                    "x": 84,
                    "y": 188
                  }
                },
                {
                  "id": "brazo_der",
                  "kind": "path",
                  "d": "M 158 186 C 174 190 180 212 174 230 C 170 242 156 242 154 230 C 152 214 154 196 158 186 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": 14,
                    "x": 156,
                    "y": 188
                  }
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "rotate": {
                "deg": -6,
                "x": 120,
                "y": 105
              },
              "children": [
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 105,
                  "r": 60,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "mancha",
                  "kind": "path",
                  "d": "M 72 78 C 92 66 116 74 120 94 C 122 110 110 126 92 124 C 72 122 62 100 72 78 Z",
                  "fill": "#FF5A36"
                },
                {
                  "id": "ojo_izq",
                  "kind": "path",
                  "d": "M 84 106 C 90 92 106 92 112 106 L 105 107 C 101 99 95 99 91 107 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ojo_der",
                  "kind": "path",
                  "d": "M 130 106 C 136 92 152 92 158 106 L 151 107 C 147 99 141 99 137 107 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 82 70 C 90 60 104 60 112 66 L 110 72 C 103 68 92 69 85 77 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 158 70 C 150 60 136 60 128 66 L 130 72 C 137 68 148 69 155 77 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "nariz",
                  "kind": "path",
                  "d": "M 108 118 C 108 113 132 113 132 118 C 132 127 124 133 120 133 C 116 133 108 127 108 118 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "boca",
                  "kind": "path",
                  "d": "M 100 138 C 100 160 140 160 140 138 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "lengua",
                  "kind": "path",
                  "d": "M 111 150 C 111 160 129 160 129 150 Z",
                  "fill": "#FF5A36"
                }
              ]
            }
          ]
        }
      ]
    },
    "error": {
      "viewBox": {
        "w": 240,
        "h": 310
      },
      "children": [
        {
          "id": "perro",
          "kind": "g",
          "children": [
            {
              "id": "orejas",
              "kind": "g",
              "fill": "#FF5A36",
              "children": [
                {
                  "id": "oreja_izq",
                  "kind": "path",
                  "d": "M 78 78 C 46 76 26 106 30 148 C 33 182 52 200 70 194 C 82 190 84 170 80 150 C 74 122 74 96 78 78 Z",
                  "rotate": {
                    "deg": 7,
                    "x": 120,
                    "y": 105
                  }
                },
                {
                  "id": "oreja_der",
                  "kind": "path",
                  "d": "M 162 78 C 194 76 214 106 210 148 C 207 182 188 200 170 194 C 158 190 156 170 160 150 C 166 122 166 96 162 78 Z",
                  "rotate": {
                    "deg": 7,
                    "x": 120,
                    "y": 105
                  }
                }
              ]
            },
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 162 222 C 184 214 200 228 198 246 C 197 256 186 260 180 252 C 176 246 182 240 188 242 C 190 234 180 228 164 234 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": 10,
                    "x": 164,
                    "y": 235
                  }
                },
                {
                  "id": "pata_izq",
                  "kind": "ellipse",
                  "cx": 104,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "pata_der",
                  "kind": "ellipse",
                  "cx": 136,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 158 C 96 158 78 180 74 208 C 70 240 90 268 120 268 C 150 268 170 240 166 208 C 162 180 144 158 120 158 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "brazo_izq",
                  "kind": "path",
                  "d": "M 82 186 C 66 190 60 212 66 230 C 70 242 84 242 86 230 C 88 214 86 196 82 186 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": 8,
                    "x": 84,
                    "y": 188
                  }
                },
                {
                  "id": "brazo_der",
                  "kind": "path",
                  "d": "M 158 186 C 174 190 180 212 174 230 C 170 242 156 242 154 230 C 152 214 154 196 158 186 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": -8,
                    "x": 156,
                    "y": 188
                  }
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "rotate": {
                "deg": 7,
                "x": 120,
                "y": 105
              },
              "children": [
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 105,
                  "r": 60,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "mancha",
                  "kind": "path",
                  "d": "M 72 78 C 92 66 116 74 120 94 C 122 110 110 126 92 124 C 72 122 62 100 72 78 Z",
                  "fill": "#FF5A36"
                },
                {
                  "id": "ojo_izq",
                  "kind": "circle",
                  "cx": 97,
                  "cy": 103,
                  "r": 13,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ojo_der",
                  "kind": "circle",
                  "cx": 143,
                  "cy": 103,
                  "r": 13,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "brillo_izq",
                  "kind": "circle",
                  "cx": 100,
                  "cy": 99,
                  "r": 4.5,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "brillo_der",
                  "kind": "circle",
                  "cx": 146,
                  "cy": 99,
                  "r": 4.5,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 80 88 C 88 76 100 70 112 68 L 113 74 C 102 77 92 83 83 94 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 160 88 C 152 76 140 70 128 68 L 127 74 C 138 77 148 83 157 94 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "nariz",
                  "kind": "path",
                  "d": "M 108 118 C 108 113 132 113 132 118 C 132 127 124 133 120 133 C 116 133 108 127 108 118 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "boca",
                  "kind": "path",
                  "d": "M 108 142 C 112 152 128 152 132 142 L 127 141 C 124 147 116 147 113 141 Z",
                  "fill": "#1B2A4A"
                }
              ]
            }
          ]
        }
      ]
    },
    "parcial": {
      "viewBox": {
        "w": 240,
        "h": 310
      },
      "children": [
        {
          "id": "perro",
          "kind": "g",
          "children": [
            {
              "id": "orejas",
              "kind": "g",
              "fill": "#FF5A36",
              "children": [
                {
                  "id": "oreja_izq",
                  "kind": "path",
                  "d": "M 78 78 C 46 76 26 106 30 148 C 33 182 52 200 70 194 C 82 190 84 170 80 150 C 74 122 74 96 78 78 Z",
                  "rotate": {
                    "deg": -14,
                    "x": 120,
                    "y": 105
                  }
                },
                {
                  "id": "oreja_der",
                  "kind": "path",
                  "d": "M 162 78 C 194 76 214 106 210 148 C 207 182 188 200 170 194 C 158 190 156 170 160 150 C 166 122 166 96 162 78 Z",
                  "rotate": {
                    "deg": -14,
                    "x": 120,
                    "y": 105
                  }
                }
              ]
            },
            {
              "id": "cuerpo",
              "kind": "g",
              "children": [
                {
                  "id": "cola",
                  "kind": "path",
                  "d": "M 162 222 C 184 214 200 228 198 246 C 197 256 186 260 180 252 C 176 246 182 240 188 242 C 190 234 180 228 164 234 Z",
                  "fill": "#5BC0BE"
                },
                {
                  "id": "pata_izq",
                  "kind": "ellipse",
                  "cx": 104,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "pata_der",
                  "kind": "ellipse",
                  "cx": 136,
                  "cy": 276,
                  "rx": 15,
                  "ry": 17,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "torso",
                  "kind": "path",
                  "d": "M 120 158 C 96 158 78 180 74 208 C 70 240 90 268 120 268 C 150 268 170 240 166 208 C 162 180 144 158 120 158 Z",
                  "fill": "#F2EDE4"
                },
                {
                  "id": "brazo_izq",
                  "kind": "path",
                  "d": "M 82 186 C 66 190 60 212 66 230 C 70 242 84 242 86 230 C 88 214 86 196 82 186 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": -18,
                    "x": 84,
                    "y": 188
                  }
                },
                {
                  "id": "brazo_der",
                  "kind": "path",
                  "d": "M 158 186 C 174 190 180 212 174 230 C 170 242 156 242 154 230 C 152 214 154 196 158 186 Z",
                  "fill": "#5BC0BE",
                  "rotate": {
                    "deg": 4,
                    "x": 156,
                    "y": 188
                  }
                }
              ]
            },
            {
              "id": "cabeza",
              "kind": "g",
              "rotate": {
                "deg": -14,
                "x": 120,
                "y": 105
              },
              "children": [
                {
                  "id": "craneo",
                  "kind": "circle",
                  "cx": 120,
                  "cy": 105,
                  "r": 60,
                  "fill": "#F2EDE4"
                },
                {
                  "id": "mancha",
                  "kind": "path",
                  "d": "M 72 78 C 92 66 116 74 120 94 C 122 110 110 126 92 124 C 72 122 62 100 72 78 Z",
                  "fill": "#FF5A36"
                },
                {
                  "id": "ojo_izq",
                  "kind": "circle",
                  "cx": 96,
                  "cy": 101,
                  "r": 13,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ojo_der",
                  "kind": "ellipse",
                  "cx": 144,
                  "cy": 103,
                  "rx": 10,
                  "ry": 6,
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_izq",
                  "kind": "path",
                  "d": "M 80 66 C 88 56 104 58 112 65 L 110 71 C 103 66 91 66 83 74 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "ceja_der",
                  "kind": "path",
                  "d": "M 160 86 C 152 78 138 79 130 84 L 132 90 C 139 86 149 85 157 93 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "nariz",
                  "kind": "path",
                  "d": "M 108 118 C 108 113 132 113 132 118 C 132 127 124 133 120 133 C 116 133 108 127 108 118 Z",
                  "fill": "#1B2A4A"
                },
                {
                  "id": "boca",
                  "kind": "path",
                  "d": "M 106 143 C 112 137 116 149 122 143 C 126 139 131 141 134 145 L 131 149 C 128 146 126 146 123 149 C 116 155 112 143 108 147 Z",
                  "fill": "#1B2A4A"
                }
              ]
            }
          ]
        }
      ]
    }
  }
} as const satisfies Record<string, Record<string, MascotArt>>;
