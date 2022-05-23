import axios from "@/plugins/axios";

export function test(){
    return axios.get("/api/test" ,{})
}