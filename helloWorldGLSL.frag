#ifdef GL_ES
precision mediump float;
#endif

vec4 green()
{
    return vec4(0.0,1.0,0.0,1.0);
}

//has a single main function that returns a color at the end: similar to C
void main() 
{
    //normalizing values makes it easier to map values between variables.
    //replacing the floats with integers: graphic card may or may not tolerate this.
	//gl_FragColor = vec4(1, 0, 1, 1);
    gl_FragColor = green();
}

