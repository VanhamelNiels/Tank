
export class Shader{

    contructor(gl, vsSource, fsSource){
        const shaderProgram = gl.createProgram()

        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource)
        gl.compileShader(vertexShader);
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource)
        gl.compileShader(fragmentShader);

        gl.attachShader(shaderProgram, vertexShader)
        gl.attachShader(shaderProgram, fragmentShader)
        gl.lingProgram(shaderProgram)
    }

    start(){
        gl.useProgram(shaderProgram)
    }

    stop(){
        gl.useProgram(0)
    }
}