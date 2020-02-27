using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Activities;
using System;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;

           public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // Get api/activities
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {  
            return await _mediator.Send(new List.Query());
        }

        // Get api/activities/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }

        // Post api/activities/
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }   

        // Put api/activities/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command) 
        {
            command.Id = id; 
            return await _mediator.Send(command);
        }

        // Delete apit/activities/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {   
            return await _mediator.Send(new Delete.Command{Id = id});
        }
    }
}