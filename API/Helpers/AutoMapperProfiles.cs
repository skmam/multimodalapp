using System;
using System.Linq;
using API.DTOs;
using API.Extensions;
using AutoMapper;
using Entities;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.LastLoggedIn,                     
                    opt => opt.MapFrom(src => src.LoginHistoryDetails.Any() ? src.LoginHistoryDetails.FirstOrDefault(x => x.LoggedIn == src.LoginHistoryDetails.Max(l => l.LoggedIn)).LoggedIn:(DateTime?)null))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));              
            CreateMap<LoginHistory, LoginHistoryDto>();
            CreateMap<MemberUpdateDto, AppUser>();
            CreateMap<RegisterDto, AppUser>();
        }
    }
}