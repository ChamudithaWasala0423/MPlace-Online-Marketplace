// components/ProfileOverview.js
import Textarea from "@/components/ui/Textarea";

const ProfileOverview: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-md p-6 lg:p-9 rounded-lg">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
          src="/user.svg"
          alt="User Profile"
        />
        <div>
          <div className="text-lg lg:text-2xl font-semibold">Thilhara Senadi</div>
          <div className="text-sm lg:text-base text-gray-500">Rathnapura, Sri Lanka</div>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm lg:text-base">First Name</label>
          <input
            type="text"
            value="Thilhara"
            className="p-3 border border-gray-300 rounded-lg text-gray-700"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm lg:text-base">Last Name</label>
          <input
            type="text"
            value="Senadi"
            className="p-3 border border-gray-300 rounded-lg text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm lg:text-base">Email</label>
          <input
            type="email"
            value="thilsenadi@gmail.com"
            className="p-3 border border-gray-300 rounded-lg text-gray-700"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm lg:text-base">Address</label>
          <Textarea
            placeholder="Enter your address"
            customWidth="w-full"
            customHeight="h-50"
          />
        </div>

        {/* Password Change */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm lg:text-base text-balck">Current Password</label>
            <input
              type="password"
              placeholder="Current Password"
              className="p-3 border border-gray-300 rounded-lg text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm lg:text-base">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              className="p-3 border border-gray-300 rounded-lg text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm lg:text-base">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm New Password"
              className="p-3 border border-gray-300 rounded-lg text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="px-6 py-2 text-sm lg:text-base bg-gray-200 rounded-lg">
          Cancel
        </button>
        <button className="px-6 py-2 text-sm lg:text-base bg-purple-600 text-white rounded-lg">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ProfileOverview;
