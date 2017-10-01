package com.arief.api;


import com.arief.model.User;
import com.sun.media.jfxmedia.Media;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public class RestAPI  {

    //belajar anotasi @QueryParam di JAXRS
    @GET
    @Path("/user")
    @Produces(MediaType.TEXT_PLAIN)
    public Response responseForUser(@QueryParam("nama")String nama){
        return Response.status(Response.Status.OK).entity("Hello user , " + nama).build();
    }

    //belajar anotasi @FormParam di JAXRS
    @POST
    @Path("/user")
    @Produces(MediaType.TEXT_PLAIN)
    public Response responseForPostUser(@FormParam("nama")String nama){
        return Response.status(Response.Status.OK).entity("Hello User FormParam : " + nama).build();
    }

    @POST
    @Path("/user/json")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response jsonRequest(User u ){
        return Response.status(200).entity(u).build();
    }

}
