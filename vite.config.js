import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default {
    resolve: {
        alias: [
            //alias per referenciar en html una carpeta particlesjs quan en realitat està en node_modules/paticles.js. Permet mantenir el mateix path en dev i prod.
            {find: /^particlesjs/, replacement: 'node_modules/particles.js'}
        ]
    },
    // config options
    plugins: [
        viteStaticCopy({
            targets: [
                {   //copia un js que no es pot funcionar com Module a una carpeta destí que s'ubicarà en dist
                    src: 'node_modules/particles.js/particles.js',
                    dest: 'particlesjs'
                }
            ]
        })
    ],
    // config options
    base: '/landing-page-personal-norbertfalco/'
}


