import { useSession } from 'next-auth/react';
import Head from '~/components/shared/Head';
import { FaWifi, FaWater, FaMoneyBillWave } from 'react-icons/fa'; // Import the required icons
import { useState } from 'react';
import { MdElectricBolt } from 'react-icons/md';
import Modal from '~/components/partials/Modal';

const PublicProfilePage = () => {
  const session = useSession();

  const [data, setData] = useState({
    electricity_bill: 100,
    internet_bill: 0,
    utility_bill: 20,
    loan_bill: 6500,
  });

  if (!session.data?.user) {
    return <div>You need to log in first to show your Dashboard</div>;
  }

  const date = new Date();

  const BillItem = ({ icon, name, amount, id }) => (
    <div className="flex items-center justify-between rounded-lg bg-gray-200 px-4 py-2">
      <div className="flex items-center space-x-2">
        <span className="text-xl text-purple-500">{icon}</span>
        <span className="font-semibold">{name}</span>
      </div>
      <div className="text-xl text-green-500">
        {amount === 0 ? (
          <div> পরিশোধিত </div>
        ) : (
          <div className="text-red-500">
            {amount} টাকা{' '}
            <button
              onClick={(e) => {
                e.preventDefault();
                // setPay(true);
              }}
              className="mx-3 rounded bg-purple-500 px-3 text-white"
            >
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // onClick={(e) => {
  //   e.preventDefault();
  //   setData((prev) => {
  //     const newState = { ...prev };
  //     newState[id] = 0;
  //     return newState;
  //   });
  // }}

  return (
    <>
      <Head title={`নাগরিক ড্যাশবোর্ড`} />

      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="my-4 text-4xl font-bold text-purple-500">
          শুভ সকাল {session.data?.user?.name}
        </div>

        <div>
          চলতি মাস {date.toLocaleString('bn-BD', { month: 'long' })} এর
          ড্যাশবোর্ড
        </div>

        <div className="space-y-4">
          <BillItem
            icon={<MdElectricBolt />}
            name="বিদ্যুৎ বিল"
            amount={data.electricity_bill}
            id="electricity_bill"
          />
          <BillItem
            icon={<FaWifi />}
            name="ইন্টারনেট বিল"
            id="internet_bill"
            amount={data.internet_bill}
          />
          <BillItem
            icon={<FaWater />}
            id="utility_bill"
            name="ইউটিলিটি বিল"
            amount={data.utility_bill}
          />
          <BillItem
            icon={<FaMoneyBillWave />}
            name="কিস্তির বিল"
            id="loan_bill"
            amount={data.loan_bill}
          />
        </div>
      </div>
    </>
  );
};

export default PublicProfilePage;
