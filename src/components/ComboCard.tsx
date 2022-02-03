import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ComboCard = ({ id, name, desc, price, url, features }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <motion.div
        layoutId={id}
        onClick={() => setSelectedId(id)}
        className='relative bg-white border border-gray-200 rounded-md flex-col cursor-pointer'
      >
        {/* Ofert alert */}
        <div className='absolute top-0 right-0 m-2 z-10 text-xs bg-blue-500 text-white px-2 rounded-md'>
          En oferta
        </div>

        {/* Header */}
        <div className='p-5 '>
          <p className='text-black font-bold'>{name}</p>
          <small className='text-gray-500'>{desc}</small>
          <div>
            <span className='font-black text-5xl'>${price}</span>
            <small className='text-gray-500 font-medium'>/ unica vez</small>
          </div>
          <a href='https://api.whatsapp.com/send?phone=+5491151132129'>
            <button className=' bg-black text-white p-2 px-5 rounded-md text-sm font-medium mt-3'>
              {' '}
              Mas info
            </button>
          </a>
        </div>
        {/* Body */}
        <div className='border-t border-black/10 p-5'>
          <small className='uppercase text-gray-600 font-bold'>
            ¿Que incluye?
          </small>
          <ul className='mt-3'>
            {features.map((feature, i) => (
              <li className='text-sm my-2' key={i}>
                <i class='fas fa-check text-green-500 mr-3'></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Combo card XL */}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className='fixed left-0 top-0 h-full z-50 bg-none md:w-full p-3 z-50'
            layoutId={selectedId}
          >
            <motion.div className='relative border border-gray-200 rounded-md drop-shadow-lg border border-gray-100 bg-white h-full'>
              {/* Boton de cierre */}
              <i
                onClick={() => setSelectedId(null)}
                className='absolute top-0 right-0 fas fa-times bg-gray-200 p-2 px-3 rounded-md m-2 text-gray-400 cursor-pointer hover:text-black'
              ></i>

              {/* Header */}
              <div className='p-5 '>
                <div className='mb-2'>
                  <p className='text-black font-bold text-4xl'>{name}</p>
                  <p className='text-gray-500 text-xl'>{desc}</p>
                </div>
                <div>
                  <span className='font-black text-5xl'>${price}</span>
                  <small className='text-gray-500 font-medium'>
                    / unica vez
                  </small>
                  <button className='mt-3 block bg-blue-500 text-white p-2 px-3 rounded-md'>
                    Comprar
                  </button>
                </div>
              </div>
              {/* Body */}
              <div className='border-t border-black/10 p-5'>
                <small className='uppercase text-gray-600 font-bold'>
                  ¿Que incluye?
                </small>
                <ul className='mt-3'>
                  {features.map((feature, i) => (
                    <li className='text-sm my-2' key={i}>
                      <i class='fas fa-check text-green-500 mr-3'></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className='h-52 overflow-auto'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquid praesentium, suscipit ex repudiandae reiciendis.
                  Dolore numquam recusandae itaque consequatur est, autem
                  repudiandae minus odit provident. Aut magnam quisquam
                  accusamus? Ab quos voluptatibus nemo tempora eum natus
                  adipisci tempore quisquam quas sit illo, rem accusantium
                  vitae? Accusamus dolorem aperiam amet facilis iure rerum eum
                  nihil numquam vitae, exercitationem vel odio aliquam velit, in
                  incidunt provident quo alias! Dolorum, saepe? Non laborum
                  soluta vel inventore magnam beatae impedit rerum dolore porro
                  est consequatur, sed ea assumenda excepturi ex voluptates
                  autem labore, fugit dolorem aliquid ratione veritatis nisi
                  ipsam. Officia quam in est incidunt soluta rerum fuga
                  architecto aliquid unde! Officia non ratione nostrum.
                  Praesentium optio dolore obcaecati quod soluta! Voluptatem
                  perferendis culpa deleniti, exercitationem vero commodi. Quod
                  ad necessitatibus odit obcaecati animi quo nostrum. Iusto
                  possimus enim ipsam odio suscipit fugiat nemo dolorum, et
                  veritatis molestias. Iusto nobis quo perferendis nostrum
                  doloremque corrupti aspernatur ratione cumque cupiditate illum
                  error culpa soluta iste molestias voluptas, numquam voluptates
                  reprehenderit dolor eos odio labore libero, id eaque rerum!
                  Praesentium illo tenetur suscipit, voluptatibus dolore vel
                  saepe inventore eveniet et rerum asperiores nulla rem natus
                  repellat adipisci similique vero, ut mollitia quas quod?
                  Impedit blanditiis error atque dolorum eveniet voluptates!
                  Facere, asperiores? Explicabo vitae sapiente labore culpa! Eum
                  quibusdam magni exercitationem ducimus voluptas dolores aut,
                  quaerat, nisi dolor quo quisquam sed, nemo mollitia amet
                  maxime repudiandae. Earum laudantium optio hic nesciunt quasi,
                  quis tempore voluptates eveniet fugit pariatur doloribus nihil
                  sed eum aperiam atque veniam natus quos, dolore qui quas,
                  autem dolores! Dolores minus unde laboriosam doloremque
                  mollitia laudantium nobis quidem cupiditate et velit,
                  veritatis distinctio eum saepe, facere consectetur a ea
                  corporis provident neque quod, nostrum cum inventore.
                  Doloremque velit sequi earum corporis iure dolore atque ipsam
                  blanditiis, id vitae inventore obcaecati aut deleniti sapiente
                  expedita a minus rem voluptates dolores. Magnam iure quaerat
                  dolor quis voluptate expedita inventore. Consequuntur totam
                  dolorum quaerat quod aliquid sed voluptates maxime, dolores
                  rem id recusandae sunt iure, omnis veniam mollitia sint, fugit
                  ipsa. Tenetur a esse, aliquam, sunt mollitia sit ipsam
                  pariatur, vero et magni ipsum! Cupiditate atque aut, ipsa
                  inventore consequatur voluptate itaque, non minus sint
                  laudantium odit vero? Illum itaque ratione magni omnis
                  numquam. Rem doloribus nesciunt eum. Eius minus officia
                  architecto excepturi. Similique alias possimus laboriosam
                  itaque, ex aliquam ullam neque officia voluptatum. Nihil
                  accusamus hic veniam facere deserunt ratione quasi, ipsam
                  mollitia tempora iste, ducimus animi asperiores nobis
                  voluptatibus recusandae placeat aut. Maxime sint enim deleniti
                  ipsam perferendis aliquam aperiam numquam, odit neque quod
                  expedita, eligendi animi, aspernatur eaque fuga repellendus
                  error? Omnis dolores blanditiis mollitia in cum reiciendis
                  saepe, nemo nulla temporibus molestias quam aliquid esse
                  consequuntur similique modi porro. Dignissimos, tempora iste?
                  Nihil pariatur minus soluta sapiente facere autem ratione
                  minima! Quisquam, beatae esse et aliquam corrupti ipsa eos
                  voluptatum veniam dolorum recusandae ab maiores. Illo, odio
                  cumque, incidunt quas cum ullam officia obcaecati eligendi
                  modi accusamus facilis temporibus ab, iste quia molestiae.
                  Itaque sit cumque blanditiis, accusantium ad eligendi
                  doloribus consequatur voluptatem. Voluptas, aperiam iure! Eos
                  molestiae explicabo qui fugiat eum, natus praesentium ex
                  similique doloribus dolorem? Eligendi quia autem laborum
                  consequuntur illum velit nisi quis tempore sint! Accusantium,
                  laudantium asperiores iste facere, illo corporis fuga,
                  expedita aspernatur fugit mollitia nulla? Repudiandae quas,
                  animi quos expedita ducimus, praesentium neque esse autem a
                  facilis quod accusantium enim sunt non architecto natus
                  mollitia, doloremque doloribus earum nisi alias recusandae
                  laboriosam ullam! Blanditiis dicta quas voluptates, optio vero
                  veritatis voluptatibus amet libero ut nihil iure obcaecati
                  porro rem aliquid error ad, quam esse reiciendis. Animi ut
                  corporis numquam, reprehenderit, iusto laborum ad ab, porro
                  vitae exercitationem sequi pariatur aliquid quibusdam nobis
                  quis? Quo commodi rerum non temporibus provident quis?
                  Possimus delectus eum fuga hic quia modi provident distinctio,
                  voluptates a quis officia reiciendis voluptatum rerum numquam,
                  atque qui, laboriosam temporibus. Eligendi illo sequi numquam,
                  dolores nulla repellat dolorem. Ipsa ea sit quae recusandae
                  inventore enim ut sint totam quam facere sed laborum
                  voluptates reiciendis, commodi assumenda, explicabo nesciunt,
                  beatae cumque modi odio repellendus nulla? Magnam consectetur
                  inventore deserunt, laudantium eveniet doloremque quis, modi
                  sit praesentium enim voluptate et non neque deleniti officiis
                  dicta? Corrupti nesciunt incidunt ipsa veniam, aspernatur
                  doloremque atque numquam voluptas perferendis autem porro eum!
                  Tenetur atque laboriosam minus explicabo mollitia corrupti ex
                  labore nulla nisi, natus tempora nostrum commodi reiciendis
                  quo tempore obcaecati saepe magnam non libero reprehenderit
                  aspernatur. Consectetur quisquam illo nostrum facilis id
                  aperiam laudantium dicta provident dolore cupiditate officia
                  saepe esse, culpa amet sint placeat temporibus? Natus, impedit
                  quae repellat reiciendis alias autem excepturi laboriosam sint
                  ab id corporis veniam et, odio necessitatibus. Nam, neque
                  possimus quae suscipit harum corrupti? Debitis natus qui
                  cumque fugit minus ipsam, nesciunt dolores rerum repellat
                  accusantium eveniet, molestias eum! Itaque ipsam, corrupti
                  alias quidem libero excepturi sapiente asperiores fuga cumque,
                  qui repudiandae, placeat adipisci. Quo est sapiente eaque
                  excepturi deleniti ipsam, nisi incidunt ipsa cupiditate,
                  omnis, sint quasi voluptatem itaque numquam dignissimos autem!
                  Nam debitis, libero minus cumque, dolore a odio autem sed
                  iure, et blanditiis eligendi voluptatem sunt laudantium
                  placeat maxime id dolor earum? Animi itaque dolor vitae
                  reiciendis quibusdam velit sapiente illum. Vel totam vero enim
                  nulla mollitia ab harum saepe, doloremque natus dicta magni
                  ducimus aut, accusamus sed repellat asperiores voluptas autem
                  quidem voluptatem error ad aliquam nostrum dolorum architecto.
                  Et, repellendus eos quibusdam dolorum impedit numquam in?
                  Sequi quia et voluptatem adipisci, odit sit pariatur fugit
                  officia perferendis tempore voluptate modi impedit accusamus
                  in. Et sed consequuntur, doloremque natus odit ipsam. Non quo
                  quae illo eligendi, quia possimus aliquam voluptatem rerum eum
                  quaerat nemo iste assumenda quibusdam laborum. Repellat
                  pariatur, libero quod vitae nisi laborum at ullam, minus esse
                  reprehenderit blanditiis tenetur. Dolore non nisi itaque
                  blanditiis numquam possimus repellat impedit! Dolore esse eos
                  ducimus sint nesciunt corrupti ex dolorem perspiciatis
                  accusantium laborum. Quia quaerat, delectus placeat pariatur
                  corrupti nobis distinctio omnis quae nam? Odio fuga,
                  voluptatem saepe quis labore illo atque iste amet dolor
                  accusantium quisquam magni minima dolores consequatur,
                  voluptas maiores aspernatur dolore. Unde, rem.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
