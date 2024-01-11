export const helpHttp = () =>{
    const customFetch = (endpoint, options) =>{
        const defaultHeader = {
            accept: "aplication/json",
        };
//definios las opciones que recibe nuestra petición fetch en jsvanilla
        const controller = new AbortController();
        options.signal = controller.signal;
        //metodos
        options.method = options.method || "GET";
        //cabeceras
        options.headers = options.headers? {...defaultHeader,...options.headers} : defaultHeader;
        //si el body no existe que lo elimine no podemos mandar un body vacio o falso en las peticiones
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;

       // console.log(options);
        //para que no se quede dando vueltas si la api no funciona
        //si pasa un segundo sin nada que pase el método abort
        setTimeout(()=> controller.abort(), 3000);
        
        
        return fetch(endpoint, options)
        .then((res) => res.ok
        ? res.json()
        :Promise.reject({
            err:true,
            status:res.status || "00",
            statusText: res.statusText || "Atención Error",
        }))
        .catch((err)=> err);
    };

    const get = (url, options= {}) => customFetch(url, options)
    const post = (url, options={}) =>{
        options.method= "POST";
        return customFetch(url, options);
    }
    const put = (url, options= {}) =>{
        options.method= "PUT";
        return customFetch(url, options);
    }
    const del = (url, options= {}) =>{
        options.method= "DELETE";
        return customFetch(url, options);
    }

    return {
        get,
        post,
        put,
        del,
    };
}