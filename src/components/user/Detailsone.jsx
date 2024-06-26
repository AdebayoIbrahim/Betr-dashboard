export const BasicDetails = ({ content }) => {
  return (
    <div className="grid_sub_one mt-[6rem] flex flex-col gap-y-[1.2rem] pl-6">
      <div className="info_names">
        <h4 className="text-[#ffff] text-[1.2rem]">{content.name}</h4>
        <p className="text-[#9d9d9d] text-[.9rem]">{content.email}</p>
      </div>
      {/* user-address */}
      <div className="flex gap-x-3 items-center">
        <p className="text-[#9d9d9d] text-[.84rem]">location:</p>
        <p className="text-[#ffff] text-[.87rem]">{content.location}</p>
      </div>

      {/* current-plan */}
      <div className="flex gap-x-3 items-center">
        <p className="text-[#9d9d9d] text-[.84rem]">CurrentPlan:</p>
        <p className="text-[#ffff] text-[.87rem]">{content.currentPlan}</p>
      </div>

      {/* business-type */}
      <div className="flex gap-x-3 items-center">
        <p className="text-[#9d9d9d] text-[.84rem]">Organization:</p>
        <p className="text-[#ffff] text-[.87rem]">{content.organization}</p>
      </div>

      {/* status-type */}
      <div className="flex gap-x-3 items-center">
        <p className="text-[#9d9d9d] text-[.84rem]">Status:</p>
        <p className="text-[#ffff] text-[.87rem]">{content.status}</p>
      </div>
      {/* edit_profile_btn */}
      <div className="pt-2">
        <button
          title="edit-profile"
          className="bg-transparent text-[0.9rem] py-1 px-4 rounded-md border border-green-600   hover:bg-green-700 hover:border-[#222943]"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};
