Search.setIndex({docnames:["backend","compliance.kaldi","datasets","functional","index","kaldi_io","models","rnnt_loss","sox_effects","torchaudio","transforms","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,"sphinxcontrib.bibtex":7,sphinx:56},filenames:["backend.rst","compliance.kaldi.rst","datasets.rst","functional.rst","index.rst","kaldi_io.rst","models.rst","rnnt_loss.rst","sox_effects.rst","torchaudio.rst","transforms.rst","utils.rst"],objects:{"torchaudio.backend.common":{AudioMetaData:[0,0,1,""]},"torchaudio.backend.soundfile_backend":{info:[0,1,1,""],load:[0,1,1,""],save:[0,1,1,""]},"torchaudio.backend.sox_io_backend":{info:[0,1,1,""],load:[0,1,1,""],save:[0,1,1,""]},"torchaudio.compliance.kaldi":{fbank:[1,1,1,""],mfcc:[1,1,1,""],spectrogram:[1,1,1,""]},"torchaudio.datasets":{CMUARCTIC:[2,0,1,""],CMUDict:[2,0,1,""],COMMONVOICE:[2,0,1,""],GTZAN:[2,0,1,""],LIBRISPEECH:[2,0,1,""],LIBRITTS:[2,0,1,""],LJSPEECH:[2,0,1,""],SPEECHCOMMANDS:[2,0,1,""],TEDLIUM:[2,0,1,""],VCTK:[2,0,1,""],VCTK_092:[2,0,1,""],YESNO:[2,0,1,""]},"torchaudio.datasets.CMUARCTIC":{__getitem__:[2,2,1,""]},"torchaudio.datasets.CMUDict":{__getitem__:[2,2,1,""]},"torchaudio.datasets.COMMONVOICE":{__getitem__:[2,2,1,""]},"torchaudio.datasets.GTZAN":{__getitem__:[2,2,1,""]},"torchaudio.datasets.LIBRISPEECH":{__getitem__:[2,2,1,""]},"torchaudio.datasets.LIBRITTS":{__getitem__:[2,2,1,""]},"torchaudio.datasets.LJSPEECH":{__getitem__:[2,2,1,""]},"torchaudio.datasets.SPEECHCOMMANDS":{__getitem__:[2,2,1,""]},"torchaudio.datasets.TEDLIUM":{__getitem__:[2,2,1,""],phoneme_dict:[2,2,1,""]},"torchaudio.datasets.VCTK":{__getitem__:[2,2,1,""]},"torchaudio.datasets.VCTK_092":{__getitem__:[2,2,1,""]},"torchaudio.datasets.YESNO":{__getitem__:[2,2,1,""]},"torchaudio.functional":{DB_to_amplitude:[3,1,1,""],allpass_biquad:[3,1,1,""],amplitude_to_DB:[3,1,1,""],angle:[3,1,1,""],apply_codec:[3,1,1,""],band_biquad:[3,1,1,""],bandpass_biquad:[3,1,1,""],bandreject_biquad:[3,1,1,""],bass_biquad:[3,1,1,""],biquad:[3,1,1,""],complex_norm:[3,1,1,""],compute_deltas:[3,1,1,""],compute_kaldi_pitch:[3,1,1,""],contrast:[3,1,1,""],create_dct:[3,1,1,""],create_fb_matrix:[3,1,1,""],dcshift:[3,1,1,""],deemph_biquad:[3,1,1,""],detect_pitch_frequency:[3,1,1,""],dither:[3,1,1,""],equalizer_biquad:[3,1,1,""],flanger:[3,1,1,""],gain:[3,1,1,""],griffinlim:[3,1,1,""],highpass_biquad:[3,1,1,""],lfilter:[3,1,1,""],linear_fbanks:[3,1,1,""],lowpass_biquad:[3,1,1,""],magphase:[3,1,1,""],mask_along_axis:[3,1,1,""],mask_along_axis_iid:[3,1,1,""],melscale_fbanks:[3,1,1,""],mu_law_decoding:[3,1,1,""],mu_law_encoding:[3,1,1,""],overdrive:[3,1,1,""],phase_vocoder:[3,1,1,""],phaser:[3,1,1,""],pitch_shift:[3,1,1,""],resample:[3,1,1,""],riaa_biquad:[3,1,1,""],sliding_window_cmn:[3,1,1,""],spectral_centroid:[3,1,1,""],spectrogram:[3,1,1,""],treble_biquad:[3,1,1,""],vad:[3,1,1,""]},"torchaudio.kaldi_io":{read_mat_ark:[5,1,1,""],read_mat_scp:[5,1,1,""],read_vec_flt_ark:[5,1,1,""],read_vec_flt_scp:[5,1,1,""],read_vec_int_ark:[5,1,1,""]},"torchaudio.models":{ConvTasNet:[6,0,1,""],DeepSpeech:[6,0,1,""],Wav2Letter:[6,0,1,""],Wav2Vec2Model:[6,0,1,""],WaveRNN:[6,0,1,""],wav2vec2_base:[6,1,1,""],wav2vec2_large:[6,1,1,""],wav2vec2_large_lv60k:[6,1,1,""],wavernn:[6,1,1,""]},"torchaudio.models.ConvTasNet":{forward:[6,2,1,""]},"torchaudio.models.DeepSpeech":{forward:[6,2,1,""]},"torchaudio.models.Wav2Letter":{forward:[6,2,1,""]},"torchaudio.models.Wav2Vec2Model":{extract_features:[6,2,1,""],forward:[6,2,1,""]},"torchaudio.models.WaveRNN":{forward:[6,2,1,""]},"torchaudio.models.wav2vec2.utils":{import_fairseq_model:[6,1,1,""],import_huggingface_model:[6,1,1,""]},"torchaudio.prototype.rnnt_loss":{RNNTLoss:[7,0,1,""],rnnt_loss:[7,1,1,""]},"torchaudio.prototype.rnnt_loss.RNNTLoss":{forward:[7,2,1,""]},"torchaudio.sox_effects":{apply_effects_file:[8,1,1,""],apply_effects_tensor:[8,1,1,""],effect_names:[8,1,1,""],init_sox_effects:[8,1,1,""],shutdown_sox_effects:[8,1,1,""]},"torchaudio.transforms":{AmplitudeToDB:[10,0,1,""],ComplexNorm:[10,0,1,""],ComputeDeltas:[10,0,1,""],Fade:[10,0,1,""],FrequencyMasking:[10,0,1,""],GriffinLim:[10,0,1,""],InverseMelScale:[10,0,1,""],LFCC:[10,0,1,""],MFCC:[10,0,1,""],MelScale:[10,0,1,""],MelSpectrogram:[10,0,1,""],MuLawDecoding:[10,0,1,""],MuLawEncoding:[10,0,1,""],PitchShift:[10,0,1,""],Resample:[10,0,1,""],SlidingWindowCmn:[10,0,1,""],SpectralCentroid:[10,0,1,""],Spectrogram:[10,0,1,""],TimeMasking:[10,0,1,""],TimeStretch:[10,0,1,""],Vad:[10,0,1,""],Vol:[10,0,1,""]},"torchaudio.transforms.AmplitudeToDB":{forward:[10,2,1,""]},"torchaudio.transforms.ComplexNorm":{forward:[10,2,1,""]},"torchaudio.transforms.ComputeDeltas":{forward:[10,2,1,""]},"torchaudio.transforms.Fade":{forward:[10,2,1,""]},"torchaudio.transforms.FrequencyMasking":{forward:[10,2,1,""]},"torchaudio.transforms.GriffinLim":{forward:[10,2,1,""]},"torchaudio.transforms.InverseMelScale":{forward:[10,2,1,""]},"torchaudio.transforms.LFCC":{forward:[10,2,1,""]},"torchaudio.transforms.MFCC":{forward:[10,2,1,""]},"torchaudio.transforms.MelScale":{forward:[10,2,1,""]},"torchaudio.transforms.MelSpectrogram":{forward:[10,2,1,""]},"torchaudio.transforms.MuLawDecoding":{forward:[10,2,1,""]},"torchaudio.transforms.MuLawEncoding":{forward:[10,2,1,""]},"torchaudio.transforms.PitchShift":{forward:[10,2,1,""]},"torchaudio.transforms.Resample":{forward:[10,2,1,""]},"torchaudio.transforms.SlidingWindowCmn":{forward:[10,2,1,""]},"torchaudio.transforms.SpectralCentroid":{forward:[10,2,1,""]},"torchaudio.transforms.Spectrogram":{forward:[10,2,1,""]},"torchaudio.transforms.TimeMasking":{forward:[10,2,1,""]},"torchaudio.transforms.TimeStretch":{forward:[10,2,1,""]},"torchaudio.transforms.Vad":{forward:[10,2,1,""]},"torchaudio.transforms.Vol":{forward:[10,2,1,""]},"torchaudio.utils":{sox_utils:[11,3,0,"-"]},"torchaudio.utils.sox_utils":{get_buffer_size:[11,1,1,""],list_effects:[11,1,1,""],list_read_formats:[11,1,1,""],list_write_formats:[11,1,1,""],set_buffer_size:[11,1,1,""],set_seed:[11,1,1,""],set_use_threads:[11,1,1,""],set_verbosity:[11,1,1,""]},torchaudio:{get_audio_backend:[9,1,1,""],info:[9,1,1,""],list_audio_backends:[9,1,1,""],load:[9,1,1,""],save:[9,1,1,""],set_audio_backend:[9,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","method","Python method"],"3":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:function","2":"py:method","3":"py:module"},terms:{"0431e":8,"0650e":8,"0db":[3,8],"10k":6,"112kbp":0,"1151e":8,"128khz":0,"14th":[3,10],"179d6e9a88202ab0a2f":10,"1860e":8,"1e9":3,"2188e":8,"2ch":8,"4122e":8,"4761e":8,"60k":6,"6159e":8,"6924e":8,"7b98e3e":[3,10],"8073e":8,"8103e":8,"8114e":8,"960h":6,"break":4,"byte":[0,8,11],"case":[0,3,6,10],"class":[0,2,6,7,8,10],"default":[0,1,2,3,6,7,10],"final":3,"float":[0,1,3,6,7,10],"function":[0,4,8,10,11],"import":[6,7,10],"int":[0,1,2,3,5,6,7,8,9,10,11],"long":[4,8],"nathana\u00ebl":[3,10],"new":[0,3,8],"return":[0,1,2,3,5,6,7,8,9,10,11],"s\u00f8ndergaard":[3,10],"short":[3,10],"super":8,"switch":[0,9],"true":[0,1,2,3,8,10,11],CMS:1,For:[0,2,3,4,8,10],Not:[0,2],One:[2,3,9,10],The:[0,1,2,3,4,5,6,7,8,9,10],There:[0,9],These:4,Use:[3,8],Used:[0,3],Uses:0,Using:3,With:3,__getitem__:[2,8],__init__:8,__len__:[2,8],_get_strid:1,_length:[3,10],a_coeff:3,aaron:6,abdelrahman:6,abl:8,about:[2,7],abov:[0,3,10],absolut:1,accent:2,accept:[0,8],accord:[5,10],accur:0,acm:6,acoust:[3,10],across:[4,8],activ:[3,10],actual:8,adam:6,adapt:0,add:[1,3,8,10],adding:3,address:6,adjust:3,advanc:3,aew:2,affect:[3,11],affel:[3,10],after:[3,8,10],again:8,age:2,ago:3,ahead:4,ahw:2,alaw:0,alex:7,alexei:6,algorithm:[3,10],alias:[3,10],all:[0,2,3,7,8],allow:[0,2,3,8,10],allowed_gap:[3,10],allpass:8,almost:2,along:[3,10],also:[0,2,3,4,7,8,10],alter:8,altern:[3,10],although:4,alwai:[0,8],amb:0,ames:[3,10],amin:3,amount:[3,10],amplif:3,amplifi:3,amplitud:[3,10],amplitude_to_db:10,amplitudetodb:4,amr:0,amr_nb:0,amr_wb:0,andrew:6,ani:[3,5,10],aniel:[3,10],annot:[0,8],anoth:[0,10],anti:[3,10],apf:3,api:[2,4],appli:[1,3,4,7,10],applic:[1,3,10],apply_effects_fil:8,apply_effects_tensor:8,approx:0,architectur:6,arctic:2,area:[3,10],arg:2,argument:[0,2,3,6,8,10],ark:5,around:5,arrai:[3,10],arxiv:[6,7],assert:8,assert_allclos:6,assign:[3,9,10],assum:[3,10],athryn:[3,10],att:[3,10],attempt:[3,10],attenberg:[3,10],attenu:[3,8],audio:[0,1,2,3,4,6,8,9,10,11],audio_ext:2,aug:6,augment:3,auli:6,aup:2,automat:[3,8],avail:[2,4,6,7,8,9,11],averag:[3,10],avoid:[3,10],awb:2,awen:[3,10],awni:6,axb:2,axi:[3,10],b_coeff:3,babaali:3,back:[3,10],backend:[3,4,11],background:[3,10],backward:4,baevski:6,bagher:3,balaz:[3,10],band:[3,8,10],bandlimit:3,bandpass:8,bank:[3,10],base:[0,3,4,6,8,9,10],basic:8,bass:3,batch:[3,6,7,8,10],batch_siz:[2,6,8],bdl:2,becaus:[2,4,8,10],been:[3,10],befor:[0,1,3,10],behind:4,being:[3,10],beta:[3,4,10],between:[3,6,10],bin:[1,3,6,10],binari:[0,4],bins_per_octav:[3,10],bit:[0,3,6,8],bitrat:0,bits_per_sampl:[0,3],bitstream:2,blackman:1,blackman_coeff:1,blank:7,block:6,bool:[0,1,2,3,8,10,11],boost:3,boot_tim:[3,10],both:[0,3,7,10],bryan:6,buffer:11,buffer_s:11,build:6,built:[2,10],burst:[3,10],bz2:2,c_t:3,cach:10,cahng:[3,10],calcul:[1,10],call:[0,8],callabl:10,can:[0,1,2,3,4,6,8,9,10],cannot:0,carl:6,carri:10,casagrand:6,casper:6,catanzaro:6,caus:3,causal:6,caution:1,ccrma:3,cdoubl:[3,10],ceil:[3,6,10],cent:8,center:[3,10],center_freq:3,central:3,central_freq:3,centroid:[3,10],cepstra:1,cepstral:[3,10],cepstral_lift:1,cepstrum:10,certain:[0,8],cfloat64:3,cfloat:[3,10],chain:[3,8,10,11],chang:[0,1,3,4,8,10],channel:[0,1,3,6,8,10,11],channels_first:[0,3,8],chapter_id:2,characterist:[3,10],check:8,checkpoint:6,checkpoint_nam:6,checkpoint_util:6,christian:6,cienc:[3,10],clamp:[3,7],classif:4,classifi:[4,6],clb:2,clean:[2,8],client_id:2,clip:[3,10],cmn:[3,10],cmn_window:[3,10],cmu:2,cmu_arct:2,cmuarctic:4,cmudict:4,cmusphinx:2,coat:6,code:[2,6],codec:[0,3],coeffcient:3,coeffici:[1,3,10],collobert:6,colour:3,column:[3,10],com:[2,10],command:[0,2,8],commit:4,commnad:8,common:[2,3,4,6,10],commonvoic:4,compand:[3,10],compar:[3,6],compat:[0,1,3,4,8],compatibl:0,compil:[0,8,11],complet:[1,4],complex:[4,10],complex_norm:10,complex_specgram:[3,10],complex_tensor:[3,10],complexnorm:4,complianc:4,compon:1,composit:10,compress:[0,3],comput:[1,3,6,7,10],compute_delta:10,computedelta:4,conda:4,condit:3,confer:[3,10],configur:[0,6,11],connect:6,consecut:6,consist:[0,4,10],const_skirt_gain:3,constant:[1,3,10],construct:2,contain:[6,7],content:3,continu:3,control:[1,3,10],conv1d:6,conv:6,converg:[3,10],convers:[3,10],convert:[0,2,3,6,10],convnet:6,convolut:6,convtasnet:4,cookbook:3,corpu:2,correct:0,correl:3,correspond:[0,2,3,6,8],cosin:10,cost:3,could:[3,10],coverag:4,cpu:[0,8],creat:[1,2,3,5,8,10],critic:3,cross:3,ctc:7,current:[0,3,9,10],custom:2,cut:[3,10],cutoff:[1,3],cutoff_freq:3,d_t:3,daniel:3,data:[1,2,3,4,8,9],data_load:2,dataload:[2,8],dataset:[4,6,8],datashar:2,db_multipli:3,dct:[3,10],dct_type:10,debug:11,decai:3,decibel:[3,10],decod:[3,6,10],decreas:[3,10],deep:6,deepspeech:4,def:8,defin:[2,3,7,8,10],definit:6,delai:3,delay_m:3,delta2:3,delta:[3,10],delta_pitch:3,den:6,denomin:3,densiti:3,density_funct:3,depend:[0,1,3,5,7,10],depth:[0,3,6],describ:[3,4],descriptor:5,design:3,desir:[3,8,10],detail:[0,2,3,9,10,11],detect:[0,3,8,10],detector:[3,10],determin:[0,3],determnin:10,dev:2,devic:[4,10],diamo:6,dict:[2,10,11],dictionari:[2,5],dieleman:6,differ:[0,3,8,9,10],digital_biquad_filt:3,dimens:[0,1,3,6,7,8,10],dimension:3,diment:6,directli:0,directori:2,discret:10,distort:3,distribut:[0,4,6,7],dither:1,divid:[3,10],doc:10,document:[0,4],doe:[0,8,10],doesn:0,doi:[3,6,10],domain:[6,10],doubl:3,dowload:2,down:[3,10],down_vot:2,download:2,downsampl:2,driven:3,dropout:6,dtype:[0,3,8,10],due:[0,2],dump:8,durat:[1,3,8,10],dynam:3,each:[1,3,6,7,10],earli:4,earliest:[3,10],eas:9,edg:3,editor:[3,10],edu:3,edward:6,eei:2,effect:[0,1,3,4,10,11],effect_nam:8,effici:[3,6,10],either:[0,2,3,6,10],element:1,elementwis:10,elimin:3,els:[0,1,3],elsen:6,emiss:6,emphasi:3,empti:2,enabl:11,enc_kernel_s:6,enc_num_feat:6,encod:[0,3,6,7,10],encoder_out:6,end:[1,3,6,8,10],energi:[1,3,10],energy_floor:1,enhanc:3,enhancement_amount:3,enough:0,entir:2,entri:[3,10],epoch:6,epsilon:1,equal:[3,6,10],equat:3,equival:3,ergstra:[3,10],erich:6,error:[2,3,8],especi:[3,10],estim:[3,10],etc:[0,3,8,10],euclidian:10,evalu:3,even:[0,3],event:[3,10],exampl:[2,3,5,6,8,10],exce:3,except:4,exclude_punctu:2,expect:[1,3,4,10],explain:[2,3],explicitli:7,expon:[3,10],exponenti:10,express:0,extend:7,extens:[0,2,8],extent:[3,10],extra:[1,3,10],extract:[1,4,6],extract_featur:6,extractor:6,f_max:[3,10],f_min:[3,10],face:6,facebook:6,factor:[0,1,3],fade:4,fade_in_len:10,fade_out_len:10,fade_shap:10,failur:11,fairseq:6,fals:[0,1,2,3,8,10],fast:[3,10],faster:[3,10],fatchord:6,feat:[1,3],featur:[1,4,6,7],feature_extractor:6,feedback:[3,4],fem:2,fetch:9,fft:[1,3,10],field:3,file:[0,1,2,3,5,6,9],file_list:8,file_or_fd:5,filedescriptor:5,filepath:[0,9],filter:[4,8,10],filterbank:[1,3,10],fine:6,first:[3,6,8],fit:[0,1],fix:[0,1],fixed_r:10,flac:[0,2],flag:4,flist:8,float32:[0,5,8,10],float64:[5,10],floor:1,florian:6,folder_in_arch:2,follow:[0,2,8,9],fool:[3,10],form:[3,10],format:[0,2,3,8,9,11],forward:[3,6,7,8,10],found:[2,3,10],four:0,fourier:[3,10],frac:[3,6],fraction:[3,10],frame:[0,1,3,6,10],frame_length:[1,3],frame_offset:0,frame_shift:[1,3],frame_tim:3,frames_per_chunk:3,framework:[4,6],free:0,freq:[1,3,10],freq_high:3,freq_low:3,freq_mask_param:10,frequenc:[1,3,6,10],frequencymask:4,from:[0,1,2,3,5,6,7,8,10,11],from_pretrain:6,front:[3,10],full:[3,10],fulli:6,gabriel:6,gain:[8,10],gain_db:3,gain_in:3,gain_out:3,gain_typ:10,gap:[3,4,10],gaussian:3,gender:2,gener:[1,4,5,6,8,10],genr:2,get:[0,1,6,8,9,11],get_audio_backend:9,get_buffer_s:11,ghahremani:3,gist:10,github:10,give:[0,2,3,8,10],given:[0,1,3,4,6,8,10],gka:2,gpdf:3,gradient:7,grave:7,greg:6,griffin:[3,10],griffinlim:4,gsm:0,gtzan:4,gzip:5,half:[3,10],half_sin:10,ham:1,han:1,handl:[0,1,2],hann_window:[3,10],hannun:6,happen:4,hardwar:3,harmon:3,has:[0,3,8,10,11],have:[2,3,6],haythamfayek:10,header:[0,8],help:[0,3,8,10],henc:2,henri:6,here:[0,2,7,10],hidden:6,high:[0,1,10],high_freq:1,higher:10,highest:[0,3,10],highlight:3,highpass:3,hint:0,hop:[3,10],hop_length:[3,6,10],howev:[0,4,8],hp_filter_freq:[3,10],hp_lifter_freq:[3,10],htk:[0,1,3,10],htk_compat:1,html:[0,2,3,10,11],http:[0,2,3,6,10,11],hug:6,iang:[3,10],icar:[3,10],icassp:[3,10],ideal:6,ident:1,identifi:2,ieee:[3,6,10],ieto:[3,10],ignal:[3,10],ignor:[2,3,10],iid_mask:10,iii:0,iir:3,imaginari:[3,10],implement:[0,2,3,6,9,10],improv:4,includ:[0,1,3,10],incomplet:3,increas:[3,10,11],index:[2,8],indic:[3,6,8,10],individu:1,infer:[0,8],inflect:1,info:[2,3,9,10],inform:[0,2],init_sox_effect:8,initi:[3,4,10],input:[0,1,2,3,6,7,8,10],input_length:6,input_sample_r:8,input_typ:6,instal:[0,5],instanc:6,instead:[0,3,10],instrument:3,int16:0,int24:0,int32:[0,11],integ:[0,3,8],intens:0,intention:[0,8],interfac:0,intern:[3,6,8,10],interpol:3,interpret:[0,10],interv:3,introduc:[3,6],introduct:2,invalid:2,invers:10,inversemelscal:4,iso:3,iter:[3,5,10],its:[2,3],jae:[3,10],jan:3,jare:6,jit:[0,8],jmk:2,joiner:7,jointli:7,jos:3,kaiser:[3,10],kaiser_window:[3,10],kalchbrenn:6,kaldi:[3,4,5],kaldi_io:4,karen:6,kastnerkyl:10,kavukcuoglu:6,kbit:0,kbp:0,kei:[2,5],keithito:2,kernel:[3,6,10],kernel_s:6,khudanpur:3,korai:6,korbinian:3,ksp:2,label:[2,6,7],lack:2,languag:6,larg:6,last:[1,3],latenc:[3,10],latest:10,law:[0,3,10],layer:[0,6],lead:[3,10],learn:[4,6,7,10],least:8,leav:8,left:[1,3,10],lehman:3,len:8,length:[0,1,3,6,7,8,10],less:[0,3,10],level:[0,2,3,10,11],lfc:10,lfcc:4,libmad:0,libmp3lam:0,librari:[0,4],librispeech:4,libritt:4,librosa:[3,10],libsox:[0,8,11],light:5,like:[0,4,8],likelihood:6,lim:[3,10],limit:4,limiter_gain:3,line:3,linear:[0,1,3,10],link:0,linspac:3,linux:0,list:[2,4,6,9,11],list_audio_backend:9,list_effect:11,list_read_format:11,list_write_format:11,ljm:2,ljspeech:[4,6],lli:[3,10],lnh:2,load:[2,6,8,9,10],load_model_ensemble_and_task:6,load_state_dict:6,loader:8,locat:2,lockhart:6,log10:3,log:[1,6,10],log_lf:10,log_mel:10,logarithm:10,logit:[6,7],logit_length:7,longer:[2,8],loss:[7,10],lossi:0,lossless:0,louder:3,low:1,low_freq:1,lower:[3,10],lowest:[0,3],lowpass:[3,8],lowpass_cutoff:3,lowpass_filter_width:[3,10],lp_filter_freq:[3,10],lp_lifter_freq:[3,10],luo:6,lv60:6,machin:[4,10],maco:0,made:9,magnitud:[1,3,6,10],mai:[0,3,4,10],main:6,maintain:4,major:4,majora:[3,10],make:3,manual:8,map:[2,11],marsya:2,mask:[3,6,10],mask_param:3,mask_valu:[3,10],match:[1,3],math:3,matric:4,matrix:[3,5,10],max:[3,7],max_f0:3,max_frames_lat:3,max_it:10,max_v:3,maximum:[0,3,10],mean:[1,2,3,7,10],measur:[3,10],measure_dur:[3,10],measure_freq:[3,10],measure_smooth_tim:[3,10],median:3,mel:[1,3,10],mel_scal:[3,10],mel_specgram:10,melkwarg:10,melresnet:6,melscal:4,melspec:10,melspectrogram:[4,6],merg:8,mesgarani:6,messag:11,meta:[0,9],metadata:[0,2],method:[0,2,3,8,10],mfc:[3,10],mfcc:[4,6],mic1:2,mic2:2,mic_id:2,michael:6,microphon:2,might:[0,8],millisecond:[1,3],mimick:[3,10],min:3,min_cmn_window:[3,10],min_dur:1,min_f0:3,minim:[3,10],minimum:[1,3,10],miss:0,mod_spe:3,mode:[3,10],model:[4,7],model_fil:6,modifi:[3,10],modul:[0,3,5,6,8,9,11],modulo:[3,10],moham:6,momentum:[3,10],mono:1,more:[2,3,7,10],most:[0,8],mp3:0,mpeg:0,msk_kernel_s:6,msk_num_feat:6,msk_num_hidden_feat:6,msk_num_lay:6,msk_num_stack:6,much:3,mulawdecod:4,mulawencod:4,mulawtran:10,multi:[0,3,10],multipl:[2,3,8],multipli:[3,10],multiprocess:2,multithread:11,music:[3,10],must:[0,1,3,6,10],mutlithread:11,n_batch:6,n_channel:6,n_class:6,n_fc:6,n_featur:6,n_fft:[3,10],n_filter:[3,10],n_frame:[3,10],n_freq:[3,6,10],n_hidden:6,n_iter:[3,10],n_lfcc:10,n_mel:[3,10],n_mfcc:[3,10],n_output:6,n_res_block:6,n_rnn:6,n_step:[3,10],n_stft:10,n_time:6,nal:6,nalysi:[3,10],name:[2,6,8,9,11],nativ:[0,3,10],nccf:3,nccf_ballast:3,necessari:3,need:[1,3,4,5,7,8,10],neg:[1,3,6,10],net:[0,2,3,10,11],network:[6,7],neural:[6,7],new_freq:[3,10],nightli:7,nima:6,nois:[3,10],noise_down_tim:[3,10],noise_reduction_amount:[3,10],noise_shap:3,noise_up_tim:[3,10],nomenclatur:7,non:[2,3,6],none:[0,2,3,6,7,8,9,10],nonlinear:3,norm:[3,10],norm_var:[3,10],normal:[0,3,8,10],normalis:8,normalized_text:2,normalized_transcript:2,norman:6,note:[0,2,3,8],notic:4,nouri:6,now:8,nthread:2,num:6,num_cep:1,num_channel:0,num_class:6,num_featur:6,num_filt:3,num_fram:[0,3,10],num_mel_bin:1,num_ord:3,num_out:6,num_sampl:0,num_sourc:6,num_work:2,number:[0,1,3,6,10],number_of_class:6,numbr:6,numer:[3,10],numeric_limit:1,nyquist:[1,3,10],object:[0,8,9,10],octav:[3,10],off:[0,1,3,10],offset:[1,3],ogg:0,olin:[3,10],onc:[8,10],one:[0,3,4,6,8,10],onesid:[3,10],onfer:[3,10],onli:[0,1,3,6,7,8,10],onlin:3,oord:6,open:[4,5],openmp:11,openslr:2,oper:[1,3,4,9],opihi:2,optim:10,option:[0,1,2,3,6,7,8,9,10,11],opu:0,order:[3,8,10],org:[2,3,6,10],orient:3,orig_freq:[3,10],origin:[2,3,6,10],original_text:2,ortho:[3,10],other:[0,1,2,3,8,10],otherwis:[0,3,7,8,10],our:3,out:10,output:[1,3,6,7,10],over:[3,6,7],overlap:[3,10],overrid:[0,8],overriding_r:10,overview:4,p280:2,p315:2,p362:2,packag:4,pad:[1,3,6,7,8,10],pad_mod:[3,10],padded_window_s:1,paper:[2,6],parallel:11,parallelli:2,paramet:[0,1,2,3,5,6,7,8,9,10,11],part:[3,4,10],particular:3,pass:[2,3,6,8,10],path:[0,2,8],pathlib:[0,2],pcm:0,pcm_:0,pcm_f:0,pcm_u:0,peak:3,pegah:3,penalty_factor:3,per:[0,3,10],perceiv:3,percentag:3,percuss:3,perform:[1,3,4,6],perhap:3,period:[3,10],perraudin:[3,10],perturb:8,peter:[3,10],phase:[3,10],phase_adv:3,phonem:2,phoneme_dict:2,pick:0,piecewis:1,pipe:5,pipeline_wavernn:6,pitch:[3,8,10],pitchshift:4,plan:2,playback:3,pleas:[0,2,6,10],point:[0,1,3,10],pointer:3,pole:[3,8],popular:4,port:[3,10],posit:10,possibl:[3,10],povei:[1,3],power:[1,3,10],power_spectrum:6,pre:10,pre_trigger_tim:[3,10],precis:[3,10],precomput:3,predictor:6,preemphasi:1,preemphasis_coeffici:1,prefer:3,prenger:6,present:2,preserv:[3,8,10],pretrain:6,prevent:3,prior:[3,10],prng:11,probabl:[3,6],problem:3,process:[1,3,6,10,11],produc:1,product:[6,10],project:4,pronounc:2,proper:0,properti:2,prototyp:4,provid:[0,8,9,10],pseudo:[3,8],publicli:2,publish:[2,6],puhrsch:6,put:1,pypi:4,pysoundfil:0,python:10,pytorch:4,q_factor:3,quadrat:3,qualiti:0,quantis:3,quantiz:3,quantization_channel:[3,10],quarter_sin:10,quiet:[3,10],quieter:[3,10],quitet:10,rand:8,rand_init:[3,10],randn:[3,8,10],random:[3,8],randomli:[3,10],randomperturbationfil:8,rang:[0,1,3,11],rate:[0,3,8,10],ratio:10,raw:[1,3,6,10],raw_energi:1,read:[0,5,8,11],readm:2,real:[3,10],reason:[3,10],receiv:6,recognit:[3,6],recommend:1,recomput:3,recompute_fram:3,record:[3,10],recov:[3,10],recoveri:[3,10],rectangular:[1,3],recurr:7,reduc:[3,10],reduct:[3,7,10],redund:[3,10],ref:3,refer:[0,2,4,9],reflect:[1,3,10],regen:3,reject:3,rel:[1,3],releas:[2,4],release1:2,release2:2,release3:2,relev:3,reload:6,remain:0,remix:8,remov:3,remove_dc_offset:1,replic:[3,10],report:0,repres:[1,3,10],represent:6,requir:[0,6,8],resampl:[4,8],resample_frequ:3,resampling_method:[3,10],resblock:6,reson:0,resourc:[2,4],respect:2,rest:2,restrict:0,result:[0,2,3,6,8,10],retain:[3,10],return_complex:[3,10],reus:3,revers:[3,10],revis:3,rewrit:10,riaa:3,rian:[3,10],ric:[3,10],riedhamm:3,right:[1,3],riol:[3,10],rms:2,rnn:[6,7],rnnt_loss:4,rnntloss:4,roceed:[3,10],roll:[3,10],rolloff:[3,10],ronan:6,root:2,round:1,round_to_power_of_two:1,row:3,rpdf:3,run:[3,4,8,10],runtim:8,rxr:2,ryan:6,safe:8,same:[3,8,10],sampl:[0,1,2,3,6,8,10],sample_frequ:1,sample_r:[0,2,3,6,8,9,10],sander:6,sanjeev:[3,6],satheesh:6,save:[3,6,8,9],scalar:7,scale:[1,3,6,10],scott:3,scp:5,script:[0,8],search:[3,10],search_tim:[3,10],seb:6,second:[1,3,8,10],section:2,see:[0,2,3,4,7,10],seed:11,segment:1,select:2,self:[6,8,10],sengupta:6,sentenc:2,separ:[3,6],seq:7,sequenc:[6,7],sequenti:10,session:6,set:[0,1,3,6,9,10,11],set_audio_backend:[0,9],set_buffer_s:11,set_se:11,set_use_thread:11,set_verbos:11,sgd:10,sgdarg:10,shape:[0,1,3,6,8,10],sharp:[3,10],sharper:[3,10],shelv:3,shift:[1,3,8,10],shorter:[3,10],should:[1,3,4,10],shubho:6,shuffl:2,shutdown:4,shutdown_sox_effect:8,side:[3,10],sign:0,signal:[0,1,3,10],signific:3,silenc:[3,8,10],similar:[1,2,3,8,10],simonyan:6,simpl:[3,10],simulate_first_pass_onlin:3,sinc:0,sinc_interpol:[3,10],sing:3,singl:[0,3,8],sinusoid:3,size:[0,1,3,6,7,8,10,11],skip:[0,2],skirt:3,slanei:[3,10],slide:[3,10],slidingwindowcmn:4,slight:8,slow:10,slower:10,slp:2,slt:2,small:[3,10],smallest:3,smooth:3,snip:3,snip_edg:[1,3],snippet:[3,10],soft:3,soft_min_f0:3,solv:10,some:[2,3,10],sometim:4,sound:[2,3,10],soundfil:[4,9],soundfile_backend:0,sourc:[0,1,2,3,4,5,6,7,8,9,10,11],sourceforg:[0,3,10,11],sox:[3,4,8,10,11],sox_effect:4,sox_io:[0,9],sox_io_backend:[0,3],sox_util:4,soxeffecttensortransform:8,soxeffecttransform:8,soxformat:0,speaker:2,speaker_id:2,spec_f:10,specgram:[3,6,10],specgram_mel_db:10,specifi:[0,1,7],speckwarg:10,spectral:[3,10],spectral_centroid:10,spectralcentroid:4,spectrogram:[4,6],spectrum:[3,10],speech:[0,2,3,6,10],speech_commands_v0:2,speechcommand:4,speed:[3,8,10],sph:[0,2],sphere:0,split:[3,6,10],squar:10,src:[0,9],stabl:[4,10],stack:6,stage:4,stanford:3,start:[0,3,6,10],state_dict:6,statu:4,std:1,step:[3,10],stft:[3,10],still:[3,10],stimberg:6,stop:10,store:3,str:[0,1,2,3,5,6,7,8,9,10,11],stream:5,stretch:[3,10],stride:6,string:[0,3,5,7,8,10],structur:4,stype:10,subclass:2,subpackag:6,subset:2,subtract:1,subtract_mean:1,suffici:1,sum:7,sum_:3,supervis:6,support:[0,2,3,4,11],suppos:8,surpass:6,sush:0,svn:2,symbol:2,synnaev:6,synthesi:6,system:[6,9],tag:4,take:[0,3],talk_id:2,tar:2,target:[2,7],target_length:7,target_transform:2,task:6,taslp:6,tasnet:6,tedlium:4,tensor:[0,1,2,3,5,6,7,9,10],term:4,test:[0,2,4,6,10],testing_list:2,text:[2,3,6,10],textbook:10,than:[0,3,8,10],thei:[2,3,10],theory_ideal_bandlimited_interpol:3,therefor:8,thi:[0,1,2,3,4,5,6,8,10,11],thing:[3,10],those:[3,10],though:[0,8],through:[4,6],time:[0,3,4,6,8,10],time_mask_param:10,timemask:4,timestretch:4,timsainb:10,togeth:10,tolerance_chang:10,tolerance_loss:10,tone:3,top:2,top_db:[3,10],torch:[0,1,2,3,5,6,7,8,9,10],torchelast:4,torchscript:[0,8],torchserv:4,torchtext:4,torchvis:4,total:1,tpdf:3,track:3,train:[2,6],tran:8,transact:6,transcript:2,transduc:7,transduct:7,transform:[2,3,4,6,8],transpos:6,treat:[3,10],trebl:3,triangular:[1,3,10],trigger:[3,10],trigger_level:[3,10],trigger_tim:[3,10],trim:[3,8,10],trmal:3,truncat:3,trunk:2,tsv:2,tune:[3,6],tupl:[0,2,3,5,6,8],turn:[1,3,10],twice:[3,10],two:[1,2,3,10],txt:2,type:[0,1,2,3,5,6,7,8,9,10,11],typic:[3,4],udio:[3,10],uff:[3,10],uint8:0,ulaw:0,unassign:9,underli:[0,11],uniform:3,uniformli:[3,10],union:2,unit:6,unknown:0,unsign:0,untouch:8,up_vot:2,upsampl:[3,6],upsample_filter_width:3,upsample_scal:6,url:[2,6],url_symbol:2,usag:[8,11],use:[0,1,2,3,5,6,8,9,10,11],use_energi:1,use_log_fbank:1,use_pow:1,use_thread:11,used:[0,2,3,6,10,11],useful:[1,3],user:[4,10],uses:[3,8,10],usic:[3,10],using:[2,3,6,7,10],usual:[3,10],util:[2,4,8],utter:[2,3,10],utterance_id:2,utterance_numb:2,uvic:2,v_0:3,vad:4,valid:[0,2,6,8,11],validation_list:2,valu:[0,2,3,8,10,11],van:6,variabl:[0,3],varianc:[3,10],variou:1,vbr:0,vctk:4,vctk_092:4,vector:[4,6],verbos:11,veri:8,version:[2,3],via:8,view_as_r:[3,10],vinyl:3,visit:2,voic:[3,10],vol:4,voltag:10,volum:[3,10],vorbi:0,vtln:1,vtln_high:1,vtln_low:1,vtln_map:1,vtln_warp:1,w2v_encod:6,wai:[1,3,8],want:[3,10],warn:[1,11],warp:1,waspaa:[3,10],wav2lett:4,wav2vec2:4,wav2vec2_asr:6,wav2vec2forctc:6,wav2vec:6,wav2vec_smal:6,wav2vec_small_960h:6,wav2vecencod:6,wav:[0,2,3,6,8,10],wave:8,wave_form:8,waveform:[1,2,3,6,8,10],waveform_shift:10,wavernn:4,wavernn_10k_epochs_8bits_ljspeech:6,waves_yesno:2,weight:[3,10],well:0,what:[1,3],when:[0,3,6,8,10,11],where:[0,1,2,3,10],whether:[2,3,10],which:[0,2,3,5,8,10],whole:[0,2,3],wideband:0,width:[3,10],wiki:3,wikipedia:[3,10],win_length:[3,10],window:[0,1,3,10],window_fn:10,window_typ:1,wise:3,within:[0,7],without:[3,10],wkwarg:10,won:3,word:2,work:8,worker:2,workshop:[3,10],would:[1,3],wrapper:5,write:11,www:[2,3],x_mu:[3,10],xla:4,yesno:4,yesno_data:2,yet:[4,8],you:[0,1,2,8,9,10],your:[0,10],ython:[3,10],zero:[1,3,7,10],zeros_lik:6,zeroth:1,zhou:6,zip:[2,8]},titles:["torchaudio.backend","torchaudio.compliance.kaldi","torchaudio.datasets","torchaudio.functional","torchaudio","torchaudio.kaldi_io","torchaudio.models","torchaudio.prototype.rnnt_loss","torchaudio.sox_effects","torchaudio","torchaudio.transforms","torchaudio.utils"],titleterms:{"function":[1,3,6,9],allpass_biquad:3,amplitude_to_db:3,amplitudetodb:10,angl:3,appli:8,apply_codec:3,audiometadata:0,avail:0,backend:[0,9],band_biquad:3,bandpass_biquad:3,bandreject_biquad:3,bass_biquad:3,biquad:3,cmuarctic:2,cmudict:2,common:0,commonvoic:2,complex:3,complex_norm:3,complexnorm:10,complianc:1,compute_delta:3,compute_kaldi_pitch:3,computedelta:10,contrast:3,convtasnet:6,create_dct:3,create_fb_matrix:3,data:0,dataset:2,db_to_amplitud:3,dcshift:3,deemph_biquad:3,deepspeech:6,detect_pitch_frequ:3,dither:3,effect:8,equalizer_biquad:3,extract:3,factori:6,fade:10,fbank:1,featur:3,file:8,filter:3,flanger:3,frequencymask:10,gain:3,griffinlim:[3,10],gtzan:2,highpass_biquad:3,import_fairseq_model:6,import_huggingface_model:6,info:0,initi:8,inversemelscal:10,kaldi:1,kaldi_io:5,lfcc:10,lfilter:3,librispeech:2,libritt:2,linear_fbank:3,list:8,ljspeech:2,load:0,lowpass_biquad:3,magphas:3,mask_along_axi:3,mask_along_axis_iid:3,matric:5,melscal:10,melscale_fbank:3,melspectrogram:10,mfcc:[1,10],model:6,mu_law_decod:3,mu_law_encod:3,mulawdecod:10,mulawencod:10,overdr:3,overview:0,phase_vocod:3,phaser:3,pitch_shift:3,pitchshift:10,prototyp:7,read_mat_ark:5,read_mat_scp:5,read_vec_flt_ark:5,read_vec_flt_scp:5,read_vec_int_ark:5,refer:[3,6,7,10],resampl:[3,10],resourc:8,riaa_biquad:3,rnnt_loss:7,rnntloss:7,save:0,shutdown:8,sliding_window_cmn:3,slidingwindowcmn:10,soundfil:0,sox:0,sox_effect:8,sox_util:11,spectral_centroid:3,spectralcentroid:10,spectrogram:[1,3,10],speechcommand:2,structur:0,support:8,tedlium:2,tensor:8,timemask:10,timestretch:10,torchaudio:[0,1,2,3,4,5,6,7,8,9,10,11],transform:10,treble_biquad:3,util:[3,6,9,11],vad:[3,10],vctk:2,vctk_092:2,vector:5,vol:10,wav2lett:6,wav2vec2:6,wav2vec2_bas:6,wav2vec2_larg:6,wav2vec2_large_lv60k:6,wav2vec2model:6,wavernn:6,yesno:2}})